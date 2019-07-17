import React from 'react';

const SvgPanda = props => {
  let classList = "svg-panda" + (props.classList ? " " + props.classList : "");

  return (
    <svg className={classList} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1974.49 1790.24" >
      <path d="m 1370.1307,1387.0856 c -4.5397,-88.0176 -21.8887,-168.2424 -26.385,-209.3019 4.1927,0.3759 8.0818,0.5639 11.566,0.5639 35.3776,0 62.4277,-16.4093 70.5095,-42.8955 6.8239,-22.3514 -2.4434,-46.0907 -23.667,-60.3603 -9.4553,-6.3179 -30.7512,-24.7947 -60.1145,-51.9026 142.5803,-36.14381 242.3229,-89.2319 291.3484,-130.68167 42.9533,-36.31734 80.8321,-37.87876 81.8441,-37.95104 a 40.799181,40.799181 0 0 0 29.1753,-69.25163 c 52.2785,-24.10072 78.5768,-70.24919 80.0225,-72.88046 a 40.828096,40.828096 0 0 0 1.7494,-36.62095 40.39437,40.39437 0 0 0 -28.4235,-22.92966 c -2.6891,-0.62168 -66.9385,-17.03099 -120.7928,-110.38333 -20.096,-34.87159 -75.6997,-120.90842 -175.6302,-203.12845 C 1555.0571,164.54142 1430.65,26.48636 1425.0694,20.341905 A 40.900384,40.900384 0 0 0 1395.1423,7.2 45.121986,45.121986 0 0 0 1388.752,7.6915564 C 1273.5977,25.850228 1210.1146,113.57859 1177.6719,181.18205 a 817.6607,817.6607 0 0 0 -174.6326,-18.5924 c -9.57091,0 -19.34421,0.11566 -28.9151,0.43373 -85.77659,2.89151 -159.48114,10.12028 -223.97623,22.10558 C 717.96549,116.31106 654.28002,26.211667 537.13056,7.734929 A 44.934038,44.934038 0 0 0 530.81262,7.2433726 40.726893,40.726893 0 0 0 500.81322,20.385278 C 495.0302,26.717681 364.7533,171.29309 428.52551,351.80995 c -33.0644,38.63055 -58.10486,79.96466 -76.8852,113.08689 -82.98629,145.9055 -222.67505,211.71623 -223.99069,212.3379 a 40.697978,40.697978 0 0 0 -13.96598,63.61319 c 20.34176,23.79711 42.50517,38.32694 63.29511,47.08821 a 40.972672,40.972672 0 0 0 37.3872,57.97474 c 1.44576,0 2.89151,0 4.33727,-0.18795 18.02855,0 66.18662,24.57782 112.76882,48.40385 78.20084,39.88835 181.02287,92.35477 311.31423,129.04802 -11.76844,10.7709 -22.16341,19.0406 -30.73673,24.3609 -31.61864,19.6623 -36.69324,48.2738 -30.93914,68.4999 7.01191,24.5778 30.11506,42.2015 59.68073,46.9002 -19.8502,180.141 -0.93974,406.6184 5.69627,486.0192 0.80962,10.0191 1.44576,17.4647 1.74936,21.9755 1.44576,21.9754 -4.56858,30.115 -6.01433,31.6764 a 40.755808,40.755808 0 0 0 7.08419,72.7648 184.37702,184.37702 0 0 0 59.66627,10.6408 143.73687,143.73687 0 0 0 17.34905,-1.0554 c 44.32683,-5.5806 60.04217,-41.204 69.3962,-62.5 0.86745,-1.9373 1.69153,-3.8746 2.55899,-5.783 26.74645,-6.0721 104.25333,-11.8985 212.52587,-11.8985 61.8638,0 106.0027,2.0096 122.2819,3.9469 23.4212,2.7469 76.8273,7.7781 85.9645,21.6863 5.783,9.0215 3.5132,24.0284 15.5997,34.4234 20.9779,18.231 54.5483,17.5804 77.478,15.9033 37.5896,-2.7325 67.4299,-8.6745 77.1888,-27.4693 7.2287,-13.9805 0.4048,-34.0186 -7.0553,-41.392 -16.3515,-16.1635 -26.7609,-25.8645 -21.1948,-31.2283 a 37.8643,37.8643 0 0 1 20.8044,-10.3227 c -0.029,-54.5483 -6.3757,-179.1289 -11.7395,-283.2376 z m 288.9484,-629.5103 56.2254,56.22538 c 0,0 -51.9026,0 -108.1279,47.57977 -38.833,32.81861 -149.5922,100.56665 -346.5184,138.1418 0.4337,1.18555 96.4318,94.29205 118.7832,109.38575 27.744,18.6502 -21.2237,50.4568 -87.7862,6.5637 34.8716,139.6888 38.0233,211.7163 42.6497,267.7248 4.771,57.9603 9.9468,187.5577 12.7082,251.7347 2.8915,28.5247 -28.4814,17.349 -22.973,55.9651 1.6048,11.2914 11.8118,13.3877 25.8356,20.9779 24.9248,13.5034 11.0166,36.3318 -7.7926,39.9028 -28.6982,5.4505 -55.1845,2.8915 -72.9239,-4.3372 -17.7394,-7.2288 -17.2044,-31.9657 -31.4596,-47.6087 -12.0431,-13.1997 -41.175,-23.4501 -74.8033,-26.6742 -61.2566,-5.8697 -380.55138,-12.1877 -394.95109,13.2431 -14.39972,25.4308 -15.39729,64.6686 -44.19671,68.2975 -28.79942,3.6288 -50.03755,0.8096 -62.94813,-7.4312 -21.51282,-21.2671 31.69093,-24.5778 28.11992,-79.0249 -2.81923,-42.8956 -34.62582,-349.6412 -0.49156,-552.4516 -45.84486,22.7273 -92.52826,-10.207 -54.85191,-33.6282 28.91508,-18.0286 64.68304,-55.4158 87.78619,-81.3382 C 449.17088,941.54751 279.85862,798.27328 213.90331,805.2129 l 47.5364,-47.52194 c -2.81922,0.69396 -65.99868,15.9033 -116.71573,-43.37262 0,0 151.39937,-69.25162 242.30839,-229.35444 26.24044,-46.26413 53.60856,-88.191 88.72593,-124.66737 C 399.62489,190.47825 530.79816,48.013639 530.79816,48.013639 647.64401,66.490376 703.11759,172.05934 725.54124,231.78344 c 67.42997,-15.07921 149.14399,-24.66456 249.95643,-27.97534 83.33323,-2.76139 158.54143,7.01191 225.97133,25.17058 23.1321,-60.24457 78.7647,-162.80637 193.7311,-180.965041 0,0 127.4143,138.575531 58.047,305.184231 96.5475,73.57443 158.4113,157.486 188.5986,209.63435 64.8566,112.50859 147.0766,129.79981 147.0766,129.79981 0,0 -43.3148,77.89723 -129.8432,64.94327 z" />
      <path d="m 1188.2693,1550.5136 c 0,72.6347 -348.51349,101.6943 -370.11305,29.0597 -21.59957,-72.6347 -14.45755,-475.6531 179.63494,-472.0532 154.60891,2.877 190.47811,370.4311 190.47811,442.9935 z" />
      <path d="m 1308.556,424.40126 c -385.1344,38.94862 -134.1804,445.6248 56.2254,402.42566 190.4058,-43.19913 228.2991,-431.22508 -56.2254,-402.42566 z m -4.3372,302.87103 a 60.591555,60.591555 0 1 1 60.5626,-60.54818 60.56264,60.56264 0 0 1 -60.606,60.54818 z" />
      <path d="m 672.45315,242.68443 c 0,0 -99.4968,25.90791 -134.12261,73.5166 0,0 -69.17934,-112.45076 21.68631,-203.37423 -0.0145,0 77.86831,25.9802 112.4363,129.85763 z" />
      <path d="M 1391.4556,316.20103 C 1356.7575,268.6068 1257.333,242.68443 1257.333,242.68443 1292.0311,138.807 1369.856,112.8268 1369.856,112.8268 c 90.8512,90.92347 21.5996,203.37423 21.5996,203.37423 z" />
      <path d="m 1022.9762,671.03246 c -99.5546,-13.01179 -181.77463,60.54818 -151.47163,173.07122 30.30301,112.52305 155.79443,155.79447 225.04613,69.295 69.2516,-86.49947 38.6883,-227.70627 -73.5745,-242.36622 z m -69.25159,82.22004 c -47.59423,-73.57443 108.20019,-69.25163 108.20019,-21.68632 0,34.90051 -60.6204,95.26074 -108.20019,21.68632 z" />
      <path d="M 675.3302,424.40126 C 390.74796,395.60184 428.699,783.49767 619.04699,826.82692 809.39498,870.15617 1060.4213,463.34988 675.3302,424.40126 Z m 4.33726,302.87103 a 60.577097,60.577097 0 1 1 60.54818,-60.54818 60.591555,60.591555 0 0 1 -60.56264,60.54818 z" />
      <path d="m 1874.4965,1097.7468 -0.1157,-4.077 c -0.1879,-4.4674 -0.4482,-8.8336 -0.7518,-13.1564 l -0.2457,-3.9614 c -0.5205,-6.1011 -1.0265,-11.3636 -1.6627,-16.0623 l -0.2747,-2.1975 c -0.6361,-4.7421 -1.4457,-9.542 -2.3132,-14.6744 -0.2313,-1.2145 -0.853,-4.3373 -0.853,-4.3373 -1.0409,-5.3638 -2.0385,-9.6721 -3.036,-13.6624 -0.2024,-0.8096 -0.4338,-1.6192 -0.7518,-2.6168 a 211.0801,211.0801 0 0 0 -7.2288,-22.2068 l -0.5494,-1.44574 c -0.7229,-1.86502 -1.4457,-3.77342 -2.2698,-5.59507 -1.1855,-2.6891 -2.4867,-5.30592 -3.7879,-7.83598 l -0.2313,-0.46265 c -1.4458,-2.74693 -2.8915,-5.39266 -4.3373,-7.98056 -1.4457,-2.5879 -2.8915,-4.78544 -4.424,-7.06974 -2.3566,-3.42643 -4.7421,-6.46252 -6.5782,-8.67452 l -0.5927,-0.75179 c -1.1422,-1.44576 -2.2988,-2.89151 -3.6,-4.33727 a 105.20753,105.20753 0 0 0 -12.5202,-11.56603 47.912291,47.912291 0 0 0 -4.4385,-3.07945 90.807816,90.807816 0 0 0 -11.1323,-6.75168 c -1.865,-0.96865 -3.8023,-1.8361 -5.783,-2.67464 a 92.629466,92.629466 0 0 0 -12.2744,-4.16377 l -0.6362,-0.17349 c -1.677,-0.46265 -3.2963,-0.93974 -5.0167,-1.27227 a 98.499228,98.499228 0 0 0 -18.6936,-2.03851 c -5.783,0 -11.2335,0.11566 -16.5539,0.54939 -1.8795,0.13011 -3.6722,0.34698 -5.436,0.59275 l -3.1373,0.36144 c -2.4,0.2747 -4.8578,0.50602 -7.1421,0.89637 l -0.5349,0.0868 c -1.9807,0.36143 -3.918,0.7807 -5.783,1.21443 l -2.8915,0.65059 c -1.9662,0.39035 -3.8891,0.78071 -5.783,1.31564 -2.2409,0.63613 -4.424,1.44575 -6.5927,2.09634 l -2.3421,0.82408 c -1.7638,0.54939 -3.5132,1.11323 -5.1469,1.79273 -2.4288,0.96866 -4.7276,2.03852 -7.0408,3.12283 l -1.706,0.853 c -1.4457,0.66504 -3.0072,1.44575 -4.424,2.12526 -2.5734,1.359 -4.9445,2.8915 -7.33,4.33726 l -1.0409,0.6795 c -1.3156,0.78071 -2.559,1.54696 -3.7734,2.39995 -2.8915,2.0096 -5.2481,3.97583 -7.2288,5.5517 l -0.6072,0.52047 a 37.589607,37.589607 0 0 0 -3.1951,2.61682 c -2.8915,2.47224 -5.1325,4.88665 -7.2288,7.06973 -0.8819,0.853 -1.7349,1.74937 -2.5734,2.63128 -2.5157,2.7903 -4.7132,5.59507 -6.5638,7.90827 -0.7373,0.86745 -1.4457,1.80719 -2.1252,2.71802 -2.2265,2.97825 -4.1638,5.92759 -5.971,8.67452 -0.5494,0.80963 -1.1132,1.64816 -1.6192,2.4867 -1.8506,3.065 -3.6433,6.28903 -5.3638,9.58535 -0.4771,0.73734 -0.853,1.44584 -1.3012,2.28434 -1.677,3.3397 -3.2674,6.7661 -4.8577,10.2938 -0.3181,0.6506 -0.5928,1.3445 -0.9253,2.0529 -1.5325,3.5711 -3.0216,7.33 -4.3372,11.0745 a 16.149073,16.149073 0 0 0 -0.6506,1.6626 c -1.4458,3.8891 -2.7759,7.8939 -4.0771,11.8552 l -0.4337,1.3301 c -1.3156,4.1638 -2.559,8.4432 -3.73,12.6504 0,0.2024 -0.2169,0.7373 -0.2892,0.9397 -1.2578,4.5252 -2.4433,9.1372 -3.6144,13.8792 a 13.778037,13.778037 0 0 0 -0.2891,1.4458 c -5.9854,24.5778 -10.7564,51.6568 -15.8021,80.2393 -2.7903,15.7877 -5.783,32.1825 -8.9348,48.9388 -9.8456,51.1074 -20.2405,90.4464 -33.5848,127.4722 l -1.0699,2.9927 c -0.8964,2.5445 -1.8216,5.0746 -2.7614,7.6336 a 331.98852,331.98852 0 0 1 -43.922,79.8923 c -5.5661,7.5324 -11.566,14.9058 -17.5804,21.6863 a 5.2336299,5.2336299 0 0 1 -0.5494,0.5927 c -5.6528,6.347 -11.7395,12.6649 -18.202,18.7948 l -0.7662,0.7952 c -5.8843,5.5228 -12.1299,10.9589 -18.5635,16.1347 l -1.0121,0.8241 c -6.4191,5.0745 -12.8672,9.8599 -19.2574,14.2117 a 326.45128,326.45128 0 0 1 -57.4976,31.2717 c -6.1156,2.5445 -11.9709,4.7854 -17.4358,6.6794 l 15.5563,146.8741 q 18.2165,-2.1108 31.2861,-4.4818 l 7.5324,-1.3156 a 764.32683,764.32683 0 0 0 106.5521,-29.1754 c 0.6216,-0.1591 1.1855,-0.3614 1.7927,-0.5638 12.072,-4.2071 25.3007,-9.1227 40.4811,-15.0792 6.0722,-2.4144 12.2745,-4.9011 18.6069,-7.5179 4.6264,-1.894 9.3251,-3.8168 14.125,-5.8698 13.9081,-5.9131 25.7489,-11.1468 37.1992,-16.4382 6.3758,-2.9783 12.8817,-6.3613 19.6912,-10.3082 49.9653,-28.12 94.5523,-72.707 132.4022,-132.5612 a 587.12075,587.12075 0 0 0 37.1125,-68.4565 l 1.1132,-2.4867 c 4.5252,-9.86 8.8769,-20.1104 13.4021,-31.4452 0,0 1.6771,-4.3372 2.1831,-5.4794 4.7999,-12.3322 8.877,-23.7826 12.5203,-34.9728 21.0212,-64.4083 32.833,-132.6479 33.2523,-192.2852 a 10.337142,10.337142 0 0 0 0,-1.1567 c 0.1446,-5.3059 0.072,-10.5829 -0.1301,-15.7442 z m -476.6507,537.2567 c 0.2169,-34.8282 -9.8167,-64.6686 -18.1731,-85.8923 a 357.44825,357.44825 0 0 0 63.1794,-34.2788 216.97878,216.97878 0 0 1 37.6764,46.8424 c 0.7518,1.2578 1.4457,2.5156 2.212,3.759 0.7662,1.2433 1.4458,2.5156 2.1108,3.7445 q 1.8216,3.1806 3.3975,6.3468 a 3.6288428,3.6288428 0 0 1 0.3036,0.6506 c 1.1133,1.9952 2.0819,4.0337 3.0072,6.0144 a 1.069858,1.069858 0 0 1 0.1735,0.3759 c 0.853,1.706 1.6337,3.3541 2.3421,5.0312 1.1711,2.5445 2.212,5.0168 3.2385,7.4312 0.5783,1.3011 1.1132,2.6023 1.5759,3.8746 0.7807,1.9084 1.4457,3.73 2.1252,5.5661 0.3615,0.9398 0.6795,1.894 1.041,2.8916 v 0 c -41.551,14.4575 -75.4684,23.5513 -104.0943,28.915 z m 244.2313,-89.8103 c -26.414,-56.1531 -81.2081,-92.615 -115.5447,-110.8893 a 364.33004,364.33004 0 0 0 47.7099,-87.3236 c 1.4457,-3.7589 2.7469,-7.4745 4.0915,-11.219 34.6981,3.73 67.6902,18.3466 96.6775,36.8667 28.9874,18.5201 54.0568,40.8281 72.9528,60.0133 -28.9729,45.9171 -64.3939,85.444 -105.887,112.5519 z m 200.0923,-413.1387 c -2.2553,51.252 -12.766,108.5762 -31.1993,164.9172 -2.9783,-3.6144 -6.0867,-7.1131 -9.3685,-10.4962 -1.6482,-1.6915 -3.2964,-3.3252 -4.9879,-4.9734 -1.6915,-1.6481 -3.4409,-3.224 -5.2192,-4.7854 -3.5421,-3.0795 -7.2287,-6.0866 -10.9154,-8.9781 q -2.7758,-2.1542 -5.783,-4.2506 c -1.894,-1.4457 -3.8891,-2.7758 -5.8698,-4.1204 a 293.6182,293.6182 0 0 0 -50.9339,-26.8765 q -6.636,-2.747 -13.3588,-5.2626 c -31.4451,-11.7395 -63.6131,-19.0984 -91.2415,-23.8115 9.2094,-47.7099 15.5418,-91.7476 24.5778,-129.077 3.918,-0.5494 7.8215,-0.9686 11.6962,-1.3012 l 2.8915,-0.2313 c 2.8915,-0.2024 5.783,-0.3614 8.6745,-0.4626 3.4264,-0.1301 6.824,-0.1735 10.207,-0.159 h 3.5132 c 1.1421,0 2.2698,0 3.412,0.087 h 0.7951 c 1.0844,0 2.1398,0 3.1952,0.1446 1.0554,0.1445 2.3855,0.1156 3.571,0.2168 4.9155,0.3181 9.7733,0.7952 14.5876,1.4458 v 0 c 2.053,0.2458 4.106,0.5349 6.1445,0.853 l 3.0794,0.4771 q 4.5975,0.7518 9.0794,1.6626 v 0 q 5.9999,1.1855 11.8985,2.6746 l 2.8915,0.7374 c 1.9374,0.4915 3.8747,1.0265 5.7831,1.5759 0.9831,0.2746 1.9517,0.5638 2.8915,0.824 2.8915,0.8386 5.783,1.7494 8.5299,2.6747 l 2.8915,0.9253 v 0 c 1.8506,0.6361 3.7012,1.2722 5.5373,1.9517 v 0 c 1.8361,0.6506 3.6577,1.3301 5.4794,2.0241 a 345.15934,345.15934 0 0 1 50.9484,24.5778 c 2.718,1.5903 5.3782,3.1951 8.0094,4.8288 2.6313,1.6337 5.2047,3.253 7.7348,4.9011 v 0 l 4.265,2.8048 0.1301,0.087 q 3.1518,2.0964 6.1589,4.2072 z" />
    </svg>
  );
}

export default SvgPanda;
