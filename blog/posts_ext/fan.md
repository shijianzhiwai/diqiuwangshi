# Fan Control Script

```shell
#!/bin/bash

# http://www.byfarthersteps.com/6802/
# This is where the raw cpu temp is stored
# Could use vcgencmd measure_temp but it returns
#   a formatted string. Messy.
cpu=$(</sys/class/thermal/thermal_zone0/temp)
# This is the limit I set. Change as necessary
# 大于 run_limit 度尝试启动风扇
# 小于 stop_limit 度尝试关闭风扇
run_limit=45000
stop_limit=33000
# To find which port your fan is plugged in run:
#  sudo ./uhubctl May need to experiment turning
#  them off to find it.
port_state=$(sudo uhubctl -l 1-1 -p 2)

if [ $cpu -gt $run_limit ]; then
  # We're overtemp. Turn on fan if necessary
  if [ $(echo "$port_state" | grep off | wc -l) -gt 0 ]
  then
    # Port was off, turn it on
    echo "Overtemp: CPU raw temp is $cpu 'C at $(date)"
    sudo uhubctl -l 2 -a 1
    printf " -----\n"
  fi
elif [ $cpu -lt $stop_limit ]; then
  # We're undertemp. Turn fan off if necessary
  if [ $(echo "$port_state" | grep power | wc -l) -gt 0 ]
  # Fan is on, turn that baby off
  then
     echo "Undertemp: CPU raw temp is $cpu 'C at $(date)"
     sudo uhubctl -l 2 -a 0
    printf " -----\n"
  fi
fi
```
