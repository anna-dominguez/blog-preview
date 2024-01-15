import Image from "next/image";
import IllustrationImage from "../../public/images/illustration-article.svg";
import AvatarImage from "../../public/images/image-avatar.webp";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-yellow text-black">
      <article
        className="bg-white p-6 rounded-[20px] flex flex-col gap-6
                        max-w-[327px] md:max-w-[384px] h-fit border border-black
                        shadow-[8px_8px_0_0_rgba(0,0,0,1)] md:shadow-[16px_16px_0_0_rgba(0,0,0,1)]"
      >
        <Image
          className="rounded-[10px]"
          src={IllustrationImage}
          alt="article illustration"
        />
        <div className="flex flex-col gap-3">
          <p className="px-3 py-1 rounded-[4px] font-extrabold w-fit text-[12px] md:text-[14px] bg-yellow">
            Learning
          </p>
          <p className="text-[12px] md:text-[14px] font-medium">
            Published 21 Dec 2023
          </p>
          <h1 className="text-[20px] md:text-[24px] font-extrabold hover:text-yellow cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="text-grey text-[14px] md:text-[16px] font-medium leading-[150%]">
            Theses languages are the backbone of every website, defining
            structure, content, and presentation
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Image className="w-8 h-8" src={AvatarImage} alt="user avatar" />
          <p className="font-extrabold text-[14px]">Greg Hooper</p>
        </div>
      </article>
    </main>
  );
}
