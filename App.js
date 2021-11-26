import * as React from 'react';
import {
  ActivityIndicator, SafeAreaView
} from 'react-native';
import { WebView } from 'react-native-webview';
import { URL } from './config';
function LoadingIndicatorView() {
  return <ActivityIndicator color='#009b88' size='large' />
}
export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: '100%',
        width: "100%",
      }}
    >
      <WebView
        originWhitelist={['*']}
        source={{ uri: URL }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        style={{
          flex: 1,
          height: '100%',
          width: "100%",
        }}
        showsHorizontalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}