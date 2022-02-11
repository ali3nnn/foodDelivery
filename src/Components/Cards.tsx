import React from 'react';

const Cards = (props: any) => {
    return (
        <div className=" w-[100%] m-auto relative hover:cursor-pointer bg-white hover:z-10 transition-all hover:scale-105">
            <div className="block h-40 rounded-[32px] mb-3"
                style={{
                    ...(props.data.src && { backgroundImage: `url('${props.data.src}')` }),
                    ...(!props.data.src && { backgroundImage: `url('https://images.medicaldaily.com/sites/medicaldaily.com/files/2014/11/10/empty-plate.jpg')` }),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>
            {props.data.title && <h3 className="text-left text-xl block font-semibold">{props.data.title}</h3>}
            {props.data.desc && <p className="text-left block text-slate-500">{props.data.desc}</p>}
            {!props.data.desc && <p className="text-left block text-white">Text<br />Replacer</p>}
        </div>
    )
}

export default Cards;
