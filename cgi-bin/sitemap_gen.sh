#!/bin/sh

# invoke with cron job that calls --
# /Users/greg/Sites/blaze-in-saddle/blaze-in-saddle-build/cgi-bin/sitemap_gen.sh

# Regenerate the sitemap
# Move to the directory that contains the Google sitemap generator
cd /Users/greg/Sites/blaze-in-saddle/blaze-in-saddle-build/cgi-bin/
echo "Now regenerating sitemap for blaze-in-saddle.com."
python sitemap_gen.py --config=/Users/greg/Sites/blaze-in-saddle/blaze-in-saddle-build/cgi-bin/blaze-in-saddle_config.xml
