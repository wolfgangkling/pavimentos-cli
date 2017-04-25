set -x

cd node_modules

sudo rm ng2-bootstrap.js
sudo rm mydatepicker.js
sudo rm -rf components
sudo rm ng2-validation.js
sudo rm angular2-modal.js
sudo rm ./angular2-modal/plugins/bootstrap.js

sudo ln -s ./ng2-bootstrap/ng2-bootstrap.js ng2-bootstrap.js
sudo ln -s ./mydatepicker/bundles/mydatepicker.umd.js mydatepicker.js
sudo ln -s ./ng2-bootstrap/components components
sudo ln -s ./ng2-validation/bundles/ng2-validation.umd.js ng2-validation.js
sudo ln -s ./angular2-modal/bundles/angular2-modal.umd.js angular2-modal.js
sudo ln -s ./jspdf/dist/jspdf.debug.js jspdf.js

cd ./angular2-modal/plugins
sudo ln -s ../../angular2-modal/bundles/angular2-modal.bootstrap.umd.js bootstrap.js

cd ../../../
cp ./src/client/app/shared/sidebar/sidebar.prod.html ./src/client/app/shared/sidebar/sidebar.html
sudo npm run build.prod
cp ./src/client/app/shared/sidebar/sidebar.dev.html ./src/client/app/shared/sidebar/sidebar.html

git add --all
git commit -m "Commit de nueva versión para produccion"
git push origin master

ssh -i "/Users/wolfgangkling/Dropbox/Personal/Pavimentos Sistema/aws/keys/pavimation.pem" ubuntu@ec2-52-27-46-52.us-west-2.compute.amazonaws.com
#cd workspace 
#sh update-prod.sh
#exit
