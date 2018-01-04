#!/bin/bash
docker-compose -f docker-compose.test.yml -p ci build
docker-compose -f docker-compose.test.yml -p ci up -d
EXIT_CODE = `docker wait ci_sut_1`
docker logs -f ci_sut_1
exit $EXIT_CODE
