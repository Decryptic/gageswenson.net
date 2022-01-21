# install nginx
sudo apt update
sudo apt install nginx

# remove default config symlink
sudo rm /etc/nginx/sites-enabled/default

# create symbolic link for server config
sudo ln gageswenson.net /etc/nginx/sites-enabled/

# check configuration file status
sudo nginx -t

# restart nginx service
sudo service nginx restart
