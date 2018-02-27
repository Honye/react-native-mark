React Native 基础框架

需修改：

1. `/android/app/src/main/java/../MainActivity.java`

```java
public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        //将“Demo”替换成自己想要的名字
        //与 React Native 代码中 AppRegistry.registerComponent() 注册的名字一致
        return "Demo";
    }
}
```

2. `/index.js`

```js
import { AppRegistry } from 'react-native';
import App from './App';
//将“Demo”替换成自己想要的名字
//与上述 MainActivity 中返回保持一致
AppRegistry.registerComponent('Demo', () => App);
```

3. `/android/app/build.gradle`

```groovy
android {
    defaultConfig {
        //将“com.demo”替换成自己的名字
        applicationId "com.demo"
    }
}
```

4. 修改 Android 包名

建议使用 Android Studio 开发工具修改，工具会自动查找关联使用的地方并做出同步修改。

![取消空包合并](http://opz28dn03.bkt.clouddn.com/images/snipaste20180108_113437.png)

![选择重命名](http://opz28dn03.bkt.clouddn.com/images/snipaste20180108_115014.png)

![更改新名](http://opz28dn03.bkt.clouddn.com/images/snipaste20180108_115459.png)
