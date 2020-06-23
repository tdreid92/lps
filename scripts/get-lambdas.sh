#!/bin/bash
#
# output all lambdas names or directories on a template.yml as space separated list
#
TEMPLATE_FILE="../template.yml"

get_lambda_logical_ids() {
 grep -B 1 "Type: AWS::Serverless::Function" $TEMPLATE_FILE | sed '/^--$/d' | while read -r LAMBDA; do
    read -r DUMMY
    echo "$LAMBDA" | sed s/://g
  done
}

get_lambda_packages_path() {
  grep "CodeUri:" $TEMPLATE_FILE | while read -r line; do
    echo "${line#$"CodeUri:"}/package.json"
  done
}

strip() {
    local STRING=${1#$"$2"}
    echo ${STRING%$"$2"}
}

CMD="$1"

case $CMD in
p | packages ) get_lambda_packages_path ;;
n | names ) get_lambda_logical_ids ;;
*) show_help ;;
esac

