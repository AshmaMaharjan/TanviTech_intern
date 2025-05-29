import React from "react";

const Team = () => {
    return ( 
        <div
            className="font-sans py-16 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/img/team.jpg')", 
            }}
        >
            <div className="container mx-auto px-4 lg:px-8 bg-transparent">
                <h2 className="text-gray-900 text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
                <div className="text-center mb-16">
                    <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mx-auto">
                        At Tanvitech, we pride ourselves on having a talented and dedicated team. Our professionals bring innovative solutions, strategic insights, and unparalleled expertise to every project. Meet the individuals who drive our mission forward and make exceptional results possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {[
                        {
                            name: "Bishnu Chaulagain",
                            role: "Director",
                            imagePath: "/img/Bishnu.png",
                        },
                        {
                            name: "Tika Raj Neupane",
                            role: "CEO",
                            imagePath: "/img/tikaraj.png",
                        },
                        {
                            name: "Laxmi Kumar Sah",
                            role: "COO",
                            imagePath: "/img/coo.jpg",
                        },
                        {
                            name: "Madna Bhattarai",
                            role: "CTO",
                            imagePath: "/img/sudip.png",
                        },
                    ].map((member, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 border border-gray-200 rounded-xl overflow-hidden shadow-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105"
                        >
                            <div className="mb-6">
                                <img
                                    src={member.imagePath}
                                    alt={member.name}
                                    className="w-32 h-32 bg-gray-200 rounded-lg mx-auto border-4 border-gray-100 object-cover shadow-md"
                                />
                            </div>
                            <h4 className="text-gray-900 text-xl font-semibold mb-1">{member.name}</h4>
                            <p className="text-gray-600 text-base">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
