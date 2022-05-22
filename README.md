# Description
This is a simple app written in Typescript using React Native. It is created to demonestrate the programmers skills.

# How to run
1. Clone the project by running `git clone https://github.com/mmilad75/myBookshelf.git`.
2. Install node_modules folder by running `npm install`.
3. In order to run the app on iOS, run `npm run ios`.
4. In order to run the app on Android, run `npm run android`.

# Run tests
I am using Detox library to implement e2e tests. You should have Detox installed on your device in order to run them. You can follow this link in order to see all the related docs:
https://github.com/wix/Detox

After installing Detox, you can run tests using this command:
`detox test --configuration ios.sim.release`
