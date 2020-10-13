## HawaiiViz
Make information on Hawaii's issues more accessible with minimal narrative.

3rd parties are free to use or reference anything on this site as long as they attribute "HawaiiViz" on any publications. Users are encouraged to contact HawaiiViz if any misinformation is found. HawaiiViz is not affiliated with any opinions or views expressed by 3rd parties. Although we strive for objectivity, HawaiiViz will correct any misleading or incorrectly-interpreted information used from our site.

# Primary Tools
Next.js
MongoDB
Mongoose
React-vis
D3.js
Emotion
Rebass

# Folder architecture
/components -> generic and app-specific components; all components not in an "app-*" folder are generic/reusable
    /app-* -> app-specific
    /layout -> presentational
    /util -> function-performing
/db -> configuration and schema models for MongoDB database
/pages
/public -> static files
/reference -> static reference Maps
/services
/services-client
/styles
/util -> Command line utilities primarily for one-time operations (eg. csv import, data parsing). Scripts can be found in package.json.

# Data 
We will only use established/government sources for primary data.
- State of Hawaii Campaign Spending Commission

# Future Goals
There are multiple areas we hope to address (eventually...):
1. Politics - campaign contributions and expenditures
2. Economy - cost of living, median salaries, job market
3. Homelessness
4. Crime
5. Education
6. Health
7. Environment
8. Agriculture
9. COVID-19

# License
MIT