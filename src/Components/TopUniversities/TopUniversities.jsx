import React, { use } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const universitiesPromise = fetch("/universities.json").then(res => res.json());

const TopUniversities = () => {
    const topUniversity = use(universitiesPromise);
    const universities = topUniversity.slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
                Top Study Universities
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((university) => (
                    <div 
                        key={university.id} 
                        className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-102 hover:shadow-xl"
                    >
                        <div className="overflow-hidden">
                            <img 
                                src={university.image_url} 
                                alt={university.name} 
                                className="w-full h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{university.name}</h3>
                            <p className="text-gray-600 mb-1"><span className="font-medium">Country:</span> {university.country}</p>
                            <p className="text-gray-600 mb-1"><span className="font-medium">Rank:</span> {university.rank}</p>
                            <p className="text-gray-600 mb-4"><span className="font-medium">Tuition:</span> {university.tuition_per_year} <span>(Per-year)</span></p>
                            
                            <button className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-indigo-500 hover:to-blue-600 transition-all duration-500 ease-in-out w-full cursor-pointer">
                                 Larne More <MdArrowRightAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-500 ease-in-out font-semibold shadow-md hover:shadow-xl cursor-pointer">
                     See All Universities
                </button>
            </div>
        </div>
    );
};

export default TopUniversities;
