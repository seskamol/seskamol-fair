// // import * as React from 'react';
// // import { useTheme } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import { Button } from '@mui/material';
// // //import Card from '@mui/material/Card';
// // import CardContent from '@mui/material/CardContent';
// // import CardMedia from '@mui/material/CardMedia';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// // import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// // import SkipNextIcon from '@mui/icons-material/SkipNext';
// // import StopIcon from '@mui/icons-material/Stop';
// // import Slider from '@mui/material/Slider';
// // import LinearProgress from '@mui/material/LinearProgress';
// //
// // ////
// // import { AudioCard } from 'material-ui-player'
// // import { IconButtonProps } from '@mui/material/IconButton';
// // //import { IconButtonOwnProps } from '@mui/material/IconButton';
// //
// // //import { ColorMode } from '../theme/ColorModeContext';
// //
// // //import AudioPlayer from "mui-audio-player-plus";
// //
// // //import CompAudioPlayer from "./CompAudioPlayer";
// //
// //
// //
// // //import AudioPlayer from 'material-ui-audio-player';
// //
// // //import Card from "@mui/material/Card";
// //
// // //import { WaveSurfer, WaveForm, useWavesurfer } from "wavesurfer-react";
// //
// //
// // const mp3Src = "https://magic.decentralized-content.com/ipfs/bafybeigwd5yo4akppjyg4tknxtr6ofby2ajje37k5nvqrjoks3lvb3kreu";
// //
// // /* const src = [
// //     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
// //     'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.wav',
// // ]; */
// //
// // /* function NavIconLink(props: IconButtonProps) {
// //
// //     const { ...rest } = props;
// //
// //     return (
// //         <IconButton
// //             {...rest}
// //             href=""
// //
// //         >
// //             {props.children}
// //         </IconButton>
// //     )
// // } */
// //
// // const mintButtonStyle = {
// //     border: 1,
// //     borderColor: "secondary.light",
// //     display: 'flex',
// //     justifyContent: 'end',
// //     width: '100%',
// //     mt: "0.2vw",
// //     ml: "0.0vw",
// // }
// //
// // /* const buttonStyle = {
// //     display: 'flex',
// //     justifyContent: 'end',
// //     width: '100%',
// //     mb: 2,
// //     mt: 3,
// //     alignSelf: 'flex-end'
// // } */
// //
// //
// // //console.log('test')
// //
// // function valuetext(value: number) {
// //     return `${value}°C`;
// // }
// //
// // export default function MediaControlCard() {
// //     //const theme = useTheme();
// //
// //     //const props = React.useState<IconButtonProps>();
// //     //const audio = document.getElementById("TestID");
// //
// //     const audioPlayer = React.useRef();
// //     const progressBar = React.useRef();
// //     const animationRef = React.useRef();
// //
// //     const [position, setPosition] = React.useState(0);
// //     const [duration, setDuration] = React.useState(0);
// //     const [currentTime, setCurrentTime] = React.useState(0)
// //     const [isPlaying, setIsPlaying] = React.useState(false);
// //
// //
// //     function formatDuration(value: number) {
// //         const minute = Math.floor(value / 60);
// //         const secondLeft = value - minute * 60;
// //         return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
// //     }
// //
// //     // React.useEffect(() => {
// //     //     const seconds = Math.floor(audioPlayer.current.duration)
// //     //     setDuration(seconds)
// //     // }, [audioPlayer.current.duration])
// //     //console.log(audioPlayer.current.currentTime)
// //
// //     const handlePlay = () => {
// //         const prevValue = isPlaying;
// //         setIsPlaying(!prevValue)
// //         if (!prevValue) {
// //             const seconds = Math.floor(audioPlayer.current.duration)
// //             setDuration(seconds)
// //             audioPlayer.current?.play();
// //             animationRef.current = requestAnimationFrame(whilePlaying)
// //         } else {
// //             audioPlayer.current?.pause();
// //             cancelAnimationFrame(animationRef.current)
// //         }
// //
// //         //console.log('E :', event);
// //
// //     };
// //
// //
// //     //React.useEffect(() => {
// //     //    animationRef.current = requestAnimationFrame(whilePlaying);
// //     //    return () => cancelAnimationFrame(animationRef.current);
// //     //}, []);
// //
// //     const whilePlaying = () => {
// //         animationRef.current = requestAnimationFrame(whilePlaying)
// //         progressBar.current.value = audioPlayer.current.currentTime;
// //
// //         setCurrentTime(progressBar.current.value)
// //
// //         //setCurrentTime(audioPlayer.current.currentTime)
// //
// //
// //         //progressBar.current.style.setProperty('--seek-before-width', ´${ progressBar.current.value / duration * 100 } %´)
// //         //setPosition(audioPlayer.current.currentTime)
// //     }
// //
// //
// //     const changeRange = () => {
// //
// //         audioPlayer.current.currentTime = progressBar.current.value;
// //         //console.log(progressBar.current)
// //         setCurrentTime(progressBar.current.value)
// //     }
// //
// //
// //     const handleSliderChange = (event: Event, newValue: number | number[]) => {
// //         if (event)
// //             setPosition(newValue as number);
// //         audioPlayer.current.currentTime = newValue;
// //     };
// //
// //
// //     //progressBar.current.value = 10;
// //
// //     //console.log("isPlaying : ", isPlaying)
// //     //console.log("Time : ", audioPlayer.current.currentTime)
// //
// //
// //     return (
// //         <Box sx={{ border: 1, borderColor: "secondary.light", p: "0.2vw", display: 'flex', height: 'auto', flexDirection: 'column' }}>
// //             <Box sx={{ border: 1, borderColor: "secondary.light", p: "0.2vw", display: 'flex', height: 500, flexDirection: 'row-reverse' }}>
// //
// //                 {/* <AudioPlayer /> */}
// //                 <Box component={'div'} sx={{ ml: '0.2vw', pr: '.8vw', border: 1, display: 'flex', flexDirection: 'column', borderColor: "secondary.light", }}>
// //                     <CardContent sx={{ flex: '1 0 auto' }}>
// //                         <Typography component="div" variant="h5">
// //                             ---
// //                         </Typography>
// //                         <Typography variant="subtitle1" color="text.secondary" component="div">
// //                             1.w <br /> 2. <br /> 3. <br /> 4. <br /> 5. <br /> 6. <br />
// //                         </Typography>
// //                     </CardContent>
// //
// //                     {/* <Typography ref={animationRef} fontSize="large">{formatDuration(currentTime)}</Typography> */}
// //                     <Typography fontSize="large">{formatDuration(position)}</Typography>
// //                     <Typography fontSize="large">{formatDuration(duration - position)}</Typography>
// //
// //                     <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
// //                         {/* <AudioCard
// //                             src={'https://magic.decentralized-content.com/ipfs/bafybeigwd5yo4akppjyg4tknxtr6ofby2ajje37k5nvqrjoks3lvb3kreu'}
// //
// //                             //autoplay
// //                             //loop={true}
// //                             //controls
// //                             //onForwardClick={handlePlay}
// //                             //autoplay={false}
// //                             width={100}
// //                             thickness={'thin'}
// //                             //speed={true}
// //                             onEnded={() => (console.log('ended'))}
// //                             //color='secondary'
// //                             background='test'
// //                             forward={true}
// //                             backward
// //                             mute
// //
// //                         /> */}
// //
// //                         {/* <IconButton sx={{ color: "primary.main" }} aria-label="previous">
// //                             {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
// //                         </IconButton> */}
// //
// //                         <IconButton size="small" sx={{ color: "primary.main" }} aria-label="play/pause">
// //                             {
// //                                 !isPlaying ?
// //                                     <PlayArrowIcon onClick={handlePlay} sx={{ height: 38, width: 38 }} />
// //                                     :
// //                                     <StopIcon onClick={handlePlay} sx={{ height: 38, width: 38 }} />
// //                             }
// //                         </IconButton>
// //
// //                         {/* <IconButton sx={{ color: "primary.main" }} aria-label="next">
// //                             {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
// //                         </IconButton> */}
// //
// //                         <Slider
// //                             //component={'range'}
// //                             ref={progressBar}
// //                             sx={{ width: '500px', mx: '10px' }}
// //                             aria-label="Small steps"
// //                             size="small"
// //                             //defaultValue={0.0}
// //                             /* variant="determinate" */
// //                             //getAriaValueText={valuetext}
// //                             marks
// //                             min={0}
// //                             step={1}
// //                             max={duration}
// //                             //valueLabelDisplay="auto"
// //                             //onChange={handleSliderChange}
// //                             onChange={handleSliderChange}
// //                         //value={100}
// //                         //value={100}
// //
// //                         />
// //
// //                         <input type='range' defaultValue={0} ref={progressBar} onChange={changeRange} />
// //
// //                     </Box>
// //                     <LinearProgress variant="determinate" ref={animationRef} />
// //
// //                 </Box>
// //
// //                 <Box component={'div'} sx={{ width: '100%' }}>
// //                     <CardMedia
// //                         component="img"
// //                         sx={{ border: 1, borderColor: "secondary.light", width: '100%', height: '100%' }}
// //                         image="https://magic.decentralized-content.com/ipfs/bafybeif6oxzmn6w44cza3vmyuae4bnvqo3uzacw32iarpslzbfpgkw72fq"
// //                         alt="Live from space album cover"
// //                     />
// //                 </Box>
// //
// //                 <CardMedia
// //                     sx={{ width: 800, height: 50, border: 1 }}
// //                     id="TestID"
// //                     className="current"
// //
// //                     component="audio"
// //                     ref={audioPlayer}
// //                     src="https://magic.decentralized-content.com/ipfs/bafybeigwd5yo4akppjyg4tknxtr6ofby2ajje37k5nvqrjoks3lvb3kreu"
// //                     //autoplay
// //                     loop
// //                     //controls
// //                     playing={false}
// //                     //play={paused}
// //                     disablePictureInPicture
// //                     disableRemotePlayback={true}
// //                     controlsList="nodownload noplaybackrate"
// //                     aria-disabled
// //
// //                 />
// //
// //
// //                 {/*
// //                 export interface Time {
// //     currentTime: number;
// //     duration: number;
// // }
// // export interface FadeSettings {
// //     fadeInTime: number;
// //     fadeOutTime: number;
// // }
// // export interface BaseProps {
// //     src: string | Promise<string> | (() => Promise<string>) | (() => string);
// //     onEnded?: () => void;
// //     color?: MaterialUIColor;
// //     PlayProps?: IconButtonProps;
// // }
// //
// //
// //                 export interface MaterialUIMediaProps extends BaseProps {
// //
// //     forward?: boolean;
// //     backward?: boolean;
// //     onForwardClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// //     onBackwardClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// //     autoplay?: boolean;
// //     loop?: boolean;
// //     width?: number;
// //     speed?: boolean;
// //     thickness?: SliderThickness;
// //     BackwardProps?: IconButtonProps;
// //     StopProps?: IconButtonProps;
// //     PauseProps?: IconButtonProps;
// //     ForwardProps?: IconButtonProps;
// //     MuteProps?: IconButtonProps;
// //     TimeProps?: TimeProps;
// //     background?: string;
// // } */}
// //
// //                 {/* <AudioCard
// //                     src={'https://magic.decentralized-content.com/ipfs/bafybeigwd5yo4akppjyg4tknxtr6ofby2ajje37k5nvqrjoks3lvb3kreu'}
// //                     //autoplay
// //                     //loop={true}
// //                     //onForwardClick={ }
// //                     autoplay={false}
// //                     width={10}
// //                     thickness={'thin'}
// //                     //speed={true}
// //                     onEnded={() => (console.log('ended'))}
// //                     //color='secondary'
// //                     background='test'
// //
// //
// //                 //onPlay={handlePlay}
// //                 //onPause={handlePause}
// //
// //
// //                 /> */}
// //
// //
// //
// //             </Box>
// //
// //             <Button sx={mintButtonStyle} size="small" >
// //                 [ connect wallet ]
// //             </Button>
// //
// //         </Box>
// //     );
// // }




/////https://magic.decentralized-content.com/ipfs/bafybeidpicgubaso6awww53ykuuctefhtlu6wy7kj7cec6qland4pyheha

/////https://magic.decentralized-content.com/ipfs/bafybeidpicgubaso6awww53ykuuctefhtlu6wy7kj7cec6qland4pyheha

//COVER//"https://magic.decentralized-content.com/ipfs/bafybeidpicgubaso6awww53ykuuctefhtlu6wy7kj7cec6qland4pyheha"
//COVER//"https://magic.decentralized-content.com/ipfs/bafybeif6oxzmn6w44cza3vmyuae4bnvqo3uzacw32iarpslzbfpgkw72fq"

//GIF//https://magic.decentralized-content.com/ipfs/bafybeibk62rrreqn233m52ceowmtyy6kf4nl5j37lqtb5lnityinh6s4k4

//AUDIO//https://magic.decentralized-content.com/ipfs/bafybeigwd5yo4akppjyg4tknxtr6ofby2ajje37k5nvqrjoks3lvb3kreu