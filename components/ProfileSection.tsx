import {Github, Linkedin, Twitter} from "lucide-react";
export default function ProfileSection() {
    const personalData ={
    name: "Ozan Özgür DİLMEN",
    title: "Yazar, Düşün Emekçisi.",
    socials: [
        {id: 1, label: "GitHub", url: "https://github.com/ozandilmen41", icon: Github},
        {id: 2, label: "LinkedIn", url: "https://www.linkedin.com/in/ozan-ozgur-dilmen/", icon: Linkedin},
    ]
  }
    return (
        <div className="flex flex-col items-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-900 tracking-tight">{personalData.name}</h1>
                <p className="text-xl text-gray-600 mt-4">{personalData.title}</p>
            </div>
            <div className="flex gap-4 mt-6">
                {personalData.socials.map((social) => (
                    <a
                        key={social.id}
                        href={social.url}
                        // target="_blank" linkin yeni sekmede açılmasını sağlar
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 border-2 border-gray-200 rounded-full text-gray-600 hover:bg-gray-900 hover:text-white hover:border-transparent transition-all duration-300"
                    >
                        <social.icon size={24} />
                    </a>
                ))}
            </div>
        </div>
    )
}