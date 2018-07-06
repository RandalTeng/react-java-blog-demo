import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="welcome">
                <div className="welcome-top heading">
                    <h2 className="w3">WELCOME</h2>
                    <div className="welcome-bottom">
                        <img src="/assets/images/t4.jpg" className="img-responsive" alt=""/>
                        <p>Vivamus interdum diam diam, non faucibus tortor consequat vitae. Proin sit amet augue sed
                            massa
                            pellentesque viverra. Suspendisse iaculis purus eget est pretium aliquam ut sed diam. Nullam
                            non magna
                            lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio, vel elementum
                            nulla luctus
                            sit amet.</p>
                        <p>Nulla in tempor lectus. Etiam ac mauris lacinia nulla ultricies porta sit amet eleifend
                            ligula. Quisque
                            tincidunt vitae turpis at efficitur. Pellentesque habitant morbi tristique senectus et netus
                            et
                            malesuada fames ac turpis egestas. Donec sagittis, magna a sagittis dapibus, ipsum metus
                            interdum
                            lectus, quis feugiat leo ipsum nec diam.</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Welcome;