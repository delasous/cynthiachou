import { Menu } from '@headlessui/react';

export default function Nav(){
    return (
        <div className='col-start-2'>
            <Menu>
                <Menu.Button>⋮</Menu.Button>
                <div className='absolute left-0 pl-5 '>
                    <Menu.Items className='h-48 flex flex-col justify-around'>
                    <Menu.Item>
                        {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                            Chatbots
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                            UX Writing
                        </a>
                        )}
                    </Menu.Item>
                    <Menu.Item disabled>
                        <span className="opacity-75">
                            Editorial                    
                        </span>
                    </Menu.Item>
                    </Menu.Items>
                </div>
            </Menu>
        </div>
    )
  };

  //each Menu-item above is actually Menu.Button if you
  //want to create nested menus