cd node_modules

sudo rm ng2-bootstrap.js
sudo rm mydatepicker.js
sudo rm -rf components
sudo rm ng2-validation.js

sudo ln -s ./ng2-bootstrap/ng2-bootstrap.js ng2-bootstrap.js
sudo ln -s ./mydatepicker/bundles/mydatepicker.umd.js mydatepicker.js
sudo ln -s ./ng2-bootstrap/components components
sudo ln -s ./ng2-validation/bundles/ng2-validation.umd.js ng2-validation.js

sudo npm run build.prod

cd ..