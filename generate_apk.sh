#!/bin/bash

# Keystore
#   password: institutocultura
#   first and last name: Porfirio Díaz
#   organizational unit: LABSOL
#   organization: COZCyT
#   city: Zacatecas
#   state: Zacatecas


if [ ! -f my-release-key.keystore ]; then
    echo "Creating the sign key..."
    echo ""
    keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
fi

echo "Deleting previous generated apks..."
echo ""
rm -f *.apk

echo "Generating the new apk..."
echo ""
ionic cordova build android --release --prod

echo "Moving the generated apk to the curren working directory..."
echo ""
mv ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk .

echo "Signing the apk..."
echo ""
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk alias_name

echo "Verificating the apk..."
echo ""
/home/porfirioadmin/Android/Sdk/build-tools/28.0.3/zipalign -v 4 app-release-unsigned.apk FCZ.apk

echo "Done"
