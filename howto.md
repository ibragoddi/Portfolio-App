# Portfolio Application
## Install Express
`npm install express -g`
## Install Express Generator
`npm install express-generator -g`
## Generate the application
`express -e portfolioApp`
## Go to project folder
`cd portfolioApp`
## Install dependencies
`npm install`
## Run command
`SET DEBUG=portfolioapp:* & npm start`
## Set custom logo
* add favicon.ico file under public/images folder
* add link tag with rel  (relation) attribute value icon nested in head tag of the index.egs html template file

## Configure TLS (Transport Layer Security)
To use https protocol, we need to configure the TLS protocol. 
By doing so, we ensure the confidential exchange of data between browser and server.
For development, we need to configure a local certification authority: mkcert.
### install mkcert 
For windows, we need to install the chocalatey package manager.
#### Install Chocolatey Package Manager
Start Windows Power Shell with administrator privileges and run the following command.

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`

#### Install mkcert
First, we run the following command:
`choco install mkcert`

#### Install the root certificate
Second, we need to install the root certificate of the local certification authority and add it to the
trust stores of the local machine.
Run the command in cmd with administrator privileges:
`mkcert -install`

#### Install the development certificate:
Finally, we generate the development certificate:
`mkcert localhost 127.0.0.1 ::1`

### Configure https with nodeJS
We need to generate a strong Diffie-Hellman paramater:

`openssl dhparam -out dh-strong.pem 2048`

Edit the "www" file under "bin" folder with the following:

`var port = normalizePort(process.env.PORT || '3443');
 app.set('port', port);`

`const https=require("https"),
     fs= require ("fs"),
     helmet = require("helmet");`
     
`const options ={
   key: fs.readFileSync("./tls/localhost+2-key.pem"),
   cert: fs.readFileSync("./tls/localhost+2.pem"),
   dhparam: fs.readFileSync("./tls/dh-strong.pem")
 };`
   
`app.use(helmet());`

`var server = https.createServer(options,app);`

Here, the helmet package is used to ensure HSTS (Http Strict Transport Security) which hint the 
browser to use exclusively https protocol.




