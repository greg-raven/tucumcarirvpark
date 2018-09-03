#!/bin/sh

# invoke with cron job that calls --
# /Users/greg/Sites/tucumcarirvpark/tucumcarirvpark-build/cgi-bin/sitemap_gen.sh

# Regenerate the sitemap
# Move to the directory that contains the Google sitemap generator
cd /Users/greg/Sites/tucumcarirvpark/tucumcarirvpark-build/cgi-bin/
echo "Now regenerating sitemap for blaze-in-saddle.com."
python sitemap_gen.py --config=/Users/greg/Sites/tucumcarirvpark/tucumcarirvpark-build/cgi-bin/blaze-in-saddle_config.xml
