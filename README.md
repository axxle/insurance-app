# insurance-app
Insurance App

Объединенный репозиторий:

insurance-app

	/insurance 		- backend 	(SpringFramework)
	
	/insurance-ui	- frontend 	(ReactJS)
	
Функции валидации находятся в файле validate-insurance-app.js. 

Локальная сборка и запуск в debug: 

./gradlew clean insurance-ui:copyFilesUI build && java -agentlib:jdwp=transport=dt_socket,address=8000,server=y,suspend=n -Dfile.encoding=UTF8 -jar insurance/webapp-runner-9.0.27.0.jar --port 8080 insurance/build/libs/*.war

Стенд на Heroku развернут тут https://insurance-app2.herokuapp.com/