const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
	{
		serverUrl: "http://100.26.57.61:9000",
		projectKey: "react-alok",
		projectName: "react-alok",
		login: "admin",
		password: "admin",
		token: "7dddb4a654f8f8897a26a5bfced78a3b79e97b2c",
		options: {
			"sonar.sources": "src",
			"sonar.tests": "src",
			"sonar.inclusions": "**", // Entry point of your code
			"sonar.test.inclusions":
				"src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx",
			"sonar.exclusions": "**/*.test.tsx",
			// "sonar.tests": "./src",
			"sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
			"sonar.testExecutionReportPaths": "test-report.xml"
		},
	},
	() => process.exit()
);
