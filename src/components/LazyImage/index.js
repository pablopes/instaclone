import  React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import  {Original, Small}  from './styles/';

const OriginalAnimated = Animated.createAnimatedComponent(Original);
export default function LazyImage ({
    shouldLoad,
    smallSource,
    source,
    aspectRatio = 1
}){
    const opacity = new Animated.Value(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if(shouldLoad){
           // setTimeout(()=>{
                setLoaded(true);
           // }, 500)
        }
    },[shouldLoad]);
    function handleAnimate(){
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }

    return (
        <Small 
            source={smallSource} 
            ratio={aspectRatio} 
            resizeMode="contain"
            blurRadius={2} 
        >
            {loaded && 
                <OriginalAnimated
                    style={{opacity}}
                    source={source}
                    ratio={aspectRatio}
                    resizeMode="contain"
                    onLoadEnd={handleAnimate}
                />
            }   
        </Small>
    );
}