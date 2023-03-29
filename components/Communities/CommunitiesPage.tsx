import {CommunitiesData} from "../../data/CommunitiesData";
import {SocialIcon} from "react-social-icons";
import Image from "next/image";


const CommunitiesPage = () => {
    return <>
        <div className="overflow-x-auto w-full">
            <table className={"table-normal w-full"}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Socials</th>
                </tr>
                </thead>
                <tbody>
                {CommunitiesData.map((community, index) => (<>
                    <tr key={index}>
                        <td>
                            <a href={community.url}>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <Image fill={true} src={community.image} alt={community.name + "logo"}/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{community.name}</div>
                                        <div className="text-sm opacity-50">{community.location.country}</div>
                                    </div>
                                </div>
                            </a>
                        </td>
                        <td>
                            {community.socials.map((social, index) => (
                                <span className={"p-0.5"}>
                                    <SocialIcon key={index} url={social} style={{height: 35, width: 35}}/>
                                </span>
                            ))}
                        </td>
                    </tr>
                </>))}
                </tbody>
            </table>
        </div>
    </>
}

export default CommunitiesPage