'use client';

import { FaPlay } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import Image from 'next/image';

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className="
                relative
                group
                flex
                items-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-100/10
                hover:bg-neutral-100/20
                transition
                pr-4 
            "
    >
      <div
        className="
                relative
                min-w-[64px]
                min-h-[64px]
            "
      >
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p className="truncate font-medium py-5">{name}</p>
      <div
        className="
                absolute
                transition
                opacity-0
                rounded-full
                flex
                items-center
                justify-center
                p-4
                right-5
                bg-green-500
                drop-shadow-md
                group-hover:opacity-100
                hover:scale-110
            "
      >
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
