import { useState, useEffect } from 'react';
import { type ModuleNodeType } from '../components/nodes/Module';
import { retrieveModules } from "../utils/retrieveModules";
import { useDnD } from '../hooks/DnDContext';

type ModuleItemProps = {
    data: ModuleNodeType['data'];
    isSearch?: boolean;
};

function ModuleItem({ data, isSearch }: ModuleItemProps) {
    const [ selected, setSelected ] = useState(false);
    const { sidebarModules, setSidebarModules } = useDnD()

    const handleClick = () => {
        if (!data) return;
        setSelected(!selected);

        if (!selected) {
            if (!sidebarModules.find((m) => m?.id === data.id)) {
              setSidebarModules([...sidebarModules, data]);
            }
          } else {
            setSidebarModules(sidebarModules.filter((m) => m?.id !== data.id));
          }
    }

    return (
        <div className={`module-item${selected ? '-active' : ''}`} 
            style={{ display: isSearch ? 'flex' : 'none' }}
            onClick={handleClick} 
        >
            <p>{data?.name}</p>
            <small>{data?.label}</small>
        </div>
    );
}

export default function SearchBar() {
    const [ modules, setModules ] = useState<ModuleNodeType[]>([]);
    const [ search, setSearch ] = useState('');

    useEffect(() => {
        retrieveModules().then( setModules );
    }, []);

    const filteredModules = modules.filter(module =>
        module.data.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="searchbar-container">
            <div className="searchbar-box">
                <input 
                    className="searchbar-message"
                    placeholder="Search packages or modules...."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    type="text"
                />
            </div>
            <div className="searchbar-result" style={{ display: search ? 'grid' : 'none'}}>
                {filteredModules.length > 0 ? (
                    filteredModules.map(module => (
                        <ModuleItem key={module.id} data={module.data} isSearch={!!search}/>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    )
}