

import ImageSlider from "./ImageSlider";

const App = () => {
    const slides = [

{URL: 'https://sebmelph.com/wordpress/wp-content/uploads/2022/12/back1.png', title: 'main' },
{URL: 'https://sebmelph.com/wordpress/wp-content/uploads/2022/12/front1.png', title: 'front' },
{URL: 'https://sebmelph.com/wordpress/wp-content/uploads/2022/12/folded.png', title: 'folded' },

    ];
    return (

        <div>

        <h1> Hello monsterlessons </h1>

        <ImageSlider slides ={slides}/> 

        </div>

    );

};

export default App;