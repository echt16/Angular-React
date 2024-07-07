function Image() {
    return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00GM_Is3Jf2xsS_IlxMlQQQnzakpyl4ljKg&s" />
}

function Members() {
    return (
        <div style={{ marginRight: '10px' }}>
            <h3>Members</h3>
            Freddie Mercury - вокал, клавишные <br /><br />
            Brian May - гитара, вокал<br /><br />
            John Deacon - бас-гитара<br /><br />
            Roger Taylor - ударные, вокал<br /><br />
        </div>
    );
}

function Albums() {
    return (
        <div>
            <h3>Albums</h3>
            Queen (1973)<br /><br />
            Queen II (1974)<br /><br />
            Sheer Heart Attack (1974)<br /><br />
            A Night at the Opera (1975)<br /><br />
            A Day at the Races (1976)<br /><br />
            News of the World (1977)<br /><br />
            Jazz (1978)<br /><br />
            The Game (1980)<br /><br />
            Flash Gordon (1980)<br /><br />
            Hot Space (1982)<br /><br />
            The Works (1984)<br /><br />
            A Kind of Magic (1986)<br /><br />
            The Miracle (1989)<br /><br />
            Innuendo (1991)<br /><br />
            Made in Heaven (1995)<br /><br />
        </div>
    );
}

function Ex2() {
    const container = {
        textAlign: 'left'
    };
    const info = {
        display: 'flex',
        textAlign: 'left'
    };
    return (
        <>
            <div style={container}>
                <Image />
                <h2>Queen</h2>
                <div style={info}>
                    <Members />
                    <Albums />
                </div>
            </div>
        </>
    );
}

export default Ex2;