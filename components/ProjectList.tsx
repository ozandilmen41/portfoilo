import { projects } from "@/data/projects";

export default function ProjectList() {

    return(
        <div className="max-w-2xl mx-auto mt-16 px-6">
            <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Projelerim</h2>
            <div className="grid gap-6">
                {projects.map((project) =>(
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        //block: tüm alanı tıklanabilir yapar
                        //hover: shadow-lg: üzerine gelince kutuya gölge verir
                        //transition: değişimlerin yumuşak olmasını sağlar
                        className="block p-6 border border-gray-200 rounded-xl hover:shadow-lg hover:bordergray-300 transition-all bg-white"
                    >
                        <h3 className="text-gray-900 font-bold text-xl mb-2">
                            {project.title}
                        </h3>

                        <p className="text-gray-600 mb-4 text-sm">
                            {project.description}
                        </p>
                        {/* 2. DÖNGÜ (NESTED MAP): TEKNOLOJİLERİ DÖNÜYORUZ */}
                        {/* flex-wrap: sığmazsa alt satıra geçsin */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((techItem, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium" 
                                    >
                                    {techItem}
                                </span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}