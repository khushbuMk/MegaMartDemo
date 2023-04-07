mkdir ./android/app/src/main/assets ;

npx react-native bundle \
	--platform android \
	--dev false \
	--entry-file index.js \
	--bundle-output android/app/src/main/assets/index.android.bundle \
	--assets-dest android/app/src/main/res ;

cd android ;

./gradlew assembleDebug ;

echo "Your Apk is located here:"
echo "./android/app/build/outputs/apk/debug/app-debug.apk"

cd ..

adb install ./android/app/build/outputs/apk/debug/app-debug.apk