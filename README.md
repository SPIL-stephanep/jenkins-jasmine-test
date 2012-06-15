jenkins-jasmine-test
====================

PART I: Get jenkins up and running
=============================================

1 - Install Debian server (root:jenkins123)
2 - Install + configure sudo (apt-get install sudo / visudo)
3 - Install ssh (apt-get install ssh)
4 - Install vim (apt-get install vim)
5 - Install GIT (apt-get install git-core)
6 - Install PHP (apt-get install php5)
7 - Install Jenkins (see: http://pkg.jenkins-ci.org/debian/)
8 - Create ssh rsa key (ssh-keygen -t rsa) in /var/lib/jenkins/.ssh
9 - Open your browser and go to : http://<youripaddress>:8080/
10 - Setup standard security (see: https://wiki.jenkins-ci.org/display/JENKINS/Standard+Security+Setup)
11 - setup java + ant version in Jenkins' config (see: https://wiki.jenkins-ci.org/display/JENKINS/Tool+Auto-Installation)

PART 2: Hook up your project in Jenkins
=============================================

1 - Install Jenkins' GIT plugin (https://wiki.jenkins-ci.org/display/JENKINS/Git+Plugin)
2 - Install Jenkin's other plugins: 
	- Duplicate Code Scanner Plug-in,
	- PMD Plug-in, Checkstyle Plug-in,
	- HTML5 Notifier Plugin,
	- Jenkins Phing plugin,
	- Jenkins JIRA plugin, 
	- Plot Plugin
3 - Set your custom build file name in the project config, in 'build/invoke Ant' advanced options (jenkins-concept.xml)
4 - Install the basic PHP pear modules on your linux server (follow: http://gogs.info/wiki/debian/hudson, section 'PHP code metrics')
5 - Install pear package 'phpcpd' (pear install phpunit/phpcpd)
6 - Install pear package 'phpmd' (pear channel-discover pear.phpmd.org, pear install phpmd/PHP_PMD)
7 - Setup your project according to the settings found here: http://172.16.8.30:8080/view/Family/job/FAMILY-concept/configure
8 - Run 'build project'

PART 3: Integrating JasmineJS unit testing
=============================================

!TODO!