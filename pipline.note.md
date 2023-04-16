
# copy file environment when deploy 
- docker.env -> .env
- test.env -> production .env

# branch deploy/* used to deploy
# deploy/test
    - server test
    - trigger auto deploy when update this branch
# deploy/production
    - server productiojn
    - trigger when merge from test to deploy