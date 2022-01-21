# install node and npm
sudo apt install node npm

# install dependencies
npm init -y
npm install express --save

# set up pm2 to enable app as a service
sudo npm install pm2@latest -g
pm2 start server.js
pm2 startup systemd
# env command generated by above command:
#sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
