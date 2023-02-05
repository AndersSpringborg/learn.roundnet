import {CommunitiesData} from "../../data/CommunitiesData";
import {SocialIcon} from "react-social-icons";


const CommunitiesPage = () => {

    return <>
    <div className={"p-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5"}>
        {CommunitiesData.map((community, index) => {
            return (
                <div key={index} className={"flex flex-col items-center p-5 h-100"}>
                    <div
                    className="w-1/2 md:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-96">
                        <a href="#">
                            <img className="rounded-t-lg max-h-48 object-center w-full" src={community.image} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {community.name}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {community.description}
                            </p>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <SocialIcon url={community.socials.facebook} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
        }
        </div>

    </>
}

export default CommunitiesPage