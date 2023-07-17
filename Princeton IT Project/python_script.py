import csv
import os

# CSV file path
csv_file = 'source/location.csv'

# Template file path
template_sub1 = 'source/templates/subpage1.html'
template_sub2 = 'source/templates/subpage2.html'
template_main = 'source/templates/index.html'

# Output directory path
output_directory = 'target'

# Create output directory if it doesn't exist
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# subpage 1
with open(csv_file, 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader) # remove if you want to read the 1st line
    for row in csv_reader:
        city = row[0]  
        state = row[1]  

        with open(template_sub1, 'r') as template:
            template_content = template.read()

            # Replace placeholders with location data
            url = template_content.replace('{location}', f'{city}-{state}')

            output_file = f'{output_directory}/subpage1_{city}{state}.html'

            # Add HTML structure and links
            html_content = f'''
            <!DOCTYPE html>
            <html>
            <head>
                <title>Subpage 1</title>
            </head>
            <body>
                <h2>{city}, {state}</h2>
                <a href="index_{city}{state}.html">Back to Index</a>
                <br>
                {url}
            </body>
            </html>
            '''

            # Save the generated HTML page
            with open(output_file, 'w') as output:
                output.write(html_content)
        
        # subpage 2
        with open(template_sub2, 'r') as template:
            template_content = template.read()

            # Replace placeholders with location data
            url = template_content.replace('{location}', f'{city}-{state}')

            output_file = f'{output_directory}/subpage2_{city}{state}.html'

            # Add HTML structure and links
            html_content = f'''
            <!DOCTYPE html>
            <html>
            <head>
                <title>Subpage 2</title>
            </head>
            <body>
                <h2>{city}, {state}</h2>
                <a href="index_{city}{state}.html">Back to Index</a>
                <br>
                {url}
            </body>
            </html>
            '''

            # Save the generated HTML page
            with open(output_file, 'w') as output:
                output.write(html_content)
        
        # Works on the main HTML file to connect to subpages
        with open(template_main, 'r') as main:
            main_content = main.read()

            url = main_content.replace('{location}', f'{city}-{state}')

            output_file = f'{output_directory}/index_{city}{state}.html'

            html_content = f'''
<!DOCTYPE html>
<html>
<head>
    <title>Sample Website</title>
    <script>
        function getUserLocation() {{
            var userCity = "{city}";
            var userState = "{state}";

            return {{
                city: userCity,
                state: userState
            }};
        }}

        function generateDynamicURLs() {{
            var userLocation = getUserLocation();
            var subpageLinks = document.getElementsByTagName('a');

            for (var i = 0; i < subpageLinks.length; i++) {{
                var link = subpageLinks[i];
                var subpageNumber = i + 1;
                var url = 'subpage' + subpageNumber + '_' + userLocation.city + userLocation.state + '.html';

                link.href = url;
            }}
        }}
    </script>
</head>
<body onload="generateDynamicURLs();">
    <h1>Main Page</h1>
        <a href="#">Subpage 1</a>
        <a href="#">Subpage 2</a>
</body>
</html>
            '''

            # Save the generated HTML page
            with open(output_file, 'w') as output:
                output.write(html_content)