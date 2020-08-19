ls -As1ko | cut -c 34- | sed -E 's/([^ ]*)$/\t\1/' | tail -n +2 | grep --color -E '[^ ]+$'
