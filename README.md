# share-make-public
Author: Jorge Elizondo

Share content in Alfresco externally via a Share Action in the document library

Installation
====================

This addon consists of an AMP and a JAR file.

To install it, simply drop the make-public-1.0.jar file into the tomcat/shared/lib folder within your Alfresco installation, copy the share-make-public-1.0.amp into amps_share, run the bin/apply_amps.sh script and restart the application server.

Building from Source
====================

A pom.xml file is provided to build a JAR file containing the custom files, which can then be installed into the tomcat/shared/lib folder of your Alfresco installation.

To build the JAR file, run Maven from share-make-public
```
mvn clean install
```

The command should build a JAR file named share-make-public\-\<version\>.jar in the target directory within your project, which you can then copy into the tomcat/shared/lib folder of your Alfresco installation.

In order to build the AMP file, run Maven from share-make=public-amp
```
mvn clean install
```

The command should build a JAR file named share-make-public\-\<version\>.amp in the target directory within your project, which you can then copy to amps_share and run thebin/apply_amps.sh script to install it.

After you have deployed the JAR and installed the amp file you will need to restart Tomcat to ensure it picks up the changes.

Usage
====================

A new Make Public action will appear at the document library. If applied to a document, it will add the Guest user as a consumer to the document, making it publicly accessible via the shown URL.

If applied to a folder it will add the Guest user as a consumer to the folder and all its contents. Below the description a special URL to share its contents publicly will be shown.

Screenshots
====================
https://github.com/ge0rg0/share-make-public/wiki
