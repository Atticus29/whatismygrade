#/bin/bash
#upload files
aws s3 cp ./dist s3://fisher-aws-testproj/experiment1 --recursive --acl public-read
