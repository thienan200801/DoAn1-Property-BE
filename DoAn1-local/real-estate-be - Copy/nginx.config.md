server {
  listen 80;
  server_name be.taisanvn.com www.be.taisanvn.com;
  location / {
    proxy_pass http://103.48.192.223:4500/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name nova-file.taisanvn.com www.nova-file.taisanvn.com;
  location / {
    proxy_pass http://103.48.192.223:4501/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name taisanvn.com www.taisanvn.com;
  location / {
    proxy_pass http://103.48.192.223:4502/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name admin.taisanvn.com www.admin.taisanvn.com;
  location / {
    proxy_pass http://103.48.192.223:4503/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}





rm /etc/nginx/sites-available/taisanvn
rm /etc/nginx/sites-enabled/taisanvn

ln -s /etc/nginx/sites-available/taisanvn /etc/nginx/sites-enabled/taisanvn

systemctl start nginx

apt install certbot python3-certbot-nginx

certbot --nginx -d taisanvn.com -d www.taisanvn.com

certbot --nginx -d be.taisanvn.com -d www.be.taisanvn.com -d nova-file.taisanvn.com -d www.nova-file.taisanvn.com -d admin.taisanvn.com -d www.admin.taisanvn.com 


====
for server test

rm /etc/nginx/sites-available/sonthuy-real-estate-test
rm /etc/nginx/sites-enabled/sonthuy-real-estate-test

ln -s /etc/nginx/sites-available/sonthuy-real-estate-test /etc/nginx/sites-enabled/sonthuy-real-estate-test


server {
  listen 80;
  server_name be.test.taisanvn.com www.be.test.taisanvn.com;
  location / {
    proxy_pass http://103.142.137.207:4500/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name nova-file.test.taisanvn.com www.nova-file.test.taisanvn.com;
  location / {
    proxy_pass http://103.142.137.207:4501/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name test.taisanvn.com www.test.taisanvn.com;
  location / {
    proxy_pass http://103.142.137.207:4502/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}
server {
  listen 80;
  server_name admin.test.taisanvn.com www.admin.test.taisanvn.com;
  location / {
    proxy_pass http://103.142.137.207:4503/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    }
}

certbot --nginx -d be.test.taisanvn.com -d www.be.test.taisanvn.com -d nova-file.test.taisanvn.com -d www.nova-file.test.taisanvn.com -d admin.test.taisanvn.com -d www.admin.test.taisanvn.com -d test.taisanvn.com -d www.test.taisanvn.com