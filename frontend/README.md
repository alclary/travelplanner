# tripXP React App
**Production API:** <https://travelplannerfrontend-production.up.railway.app/>

**Description:** Client side React application for the tripXP travel app. 

## Development
* Make sure that you're within the `frontend` directory when working on the API.
* We are utilizing [Vite](https://vitejs.dev/) as frontend tooling. It will be installed as a dependency when you run `npm install`.
  * Vite provides an intuitive CLI and features fast hot module replacement for the dev server. In essence, the dev server will monitor the `src` directory for changes and live reload as needed to assist with development. The dev server is run with `npm run dev`.
* Make sure that you create a local `.env` file and configure it to your needs❗ You will need to create one when you first clone the repo. See the example below for the minimum env variable requirements. NOTE: ALL variables must be prefixed with `VITE_` as shown.
```
# URL API is being served from
VITE_API_BASE_URL='http://localhost:3003'

# Google Maps; See https://developers.google.com/maps/documentation/javascript/get-api-key
VITE_GOOGLE_API_KEY='INSERT GOOGLE API KEY HERE (SEE ABOVE)'

# Google Identity; See https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid#get_your_google_api_client_id
VITE_GOOGLE_IDENTITY_CLIENT_ID='INSERT GOOGLE IDENTITY CLIENT ID (SEE ABOVE)'
```

* Run the following commands to start the local Vite development server. 
```
git clone git@github.com:alclary/travelplanner.git
cd travelplanner/frontend
npm install
npm run dev
```

## Deployment and Production
* When a pull request is accepted into the main branch (requires code review), Github Actions will coordinate with Railway and attempt to automatically deploy the latest code to the production URL shared above.
  * If the PR only contains frontend changes, then only the frontend should be rebuilt and redeployed in Railway.
* If the Railway build and deployment fails to build and serve the nodeJS app, both Github and Railway *should* announce the failure. Please see either the [#railway](https://discordapp.com/channels/1225842180912971926/1230325947404652584) channel in our group discord server or log in to the Railway dashboard itself to view more details on any failure.
* Production handles its own [set of environmental variables](https://docs.railway.app/guides/variables), navigate to the Railway dashboard to view and configure those.

### Railway Deployment
* When a PR to main succeeds and a Railway deployment is initiated for the frontend, Railway reads the `nixpacks.toml` file in this directory. [nixpacks](https://nixpacks.com/docs) is Railway's open source project for customizing the build process for the containerized images it utilizes to deploy projects to the cloud.
* Our nixpacks config is borrowed from [brody192/vite-react-template](brody192/vite-react-template) and instructs Railway to construct a Ubuntu image configured with a Caddy server to serve our React application
