#jenkins-jasmine-test#


##PART I: Get jenkins up and running##

<ol>
	<li>Install Debian server (root:jenkins123)</li>
	<li>Install + configure sudo (apt-get install sudo / visudo)</li>
	<li>Install ssh (apt-get install ssh)</li>
	<li>Install vim (apt-get install vim)</li>
	<li>Install GIT (apt-get install git-core)</li>
	<li>Install PHP (apt-get install php5)</li>
	<li>Install Jenkins (see: http://pkg.jenkins-ci.org/debian/)</li>
	<li>Create ssh rsa key (ssh-keygen -t rsa) in /var/lib/jenkins/.ssh</li>
	<li>Open your browser and go to : http://<youripaddress>:8080/</li>
	<li>Setup standard security (see: https://wiki.jenkins-ci.org/display/JENKINS/Standard+Security+Setup)</li>
	<li>setup java + ant version in Jenkins' config (see: https://wiki.jenkins-ci.org/display/JENKINS/Tool+Auto-Installation)</li>
</ol>

##PART 2: Hook up your project in Jenkins##

<ol>
	<li>Install Jenkins' GIT plugin (https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)</li>
	<li>Install Jenkin's other plugins:
		<ul>
			<li>Duplicate Code Scanner Plug-in,
			<li>PMD Plug-in, Checkstyle Plug-in,
			<li>HTML5 Notifier Plugin,
			<li>Jenkins Phing plugin,
			<li>Jenkins JIRA plugin, 
			<li>Plot Plugin
		<ul>
	</li>
	<li>Set your custom build file name in the project config, in 'build/invoke Ant' advanced options (jenkins-concept.xml)</li>
	<li>Install the basic PHP pear modules on your linux server (follow: http://gogs.info/wiki/debian/hudson, section 'PHP code metrics')</li>
	<li>Install pear package 'phpcpd' (pear install phpunit/phpcpd)</li>
	<li>Install pear package 'phpmd' (pear channel-discover pear.phpmd.org, pear install phpmd/PHP_PMD)</li>
	<li>Setup your project according to the settings found here: http://172.16.8.30:8080/view/Family/job/FAMILY-concept/configure</li>
	<li>Run 'build project'</li>
</ol>

##PART 3: Integrating JasmineJS unit testing##

!TODO!