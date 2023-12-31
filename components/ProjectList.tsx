import ProjectItem from './ProjectItem';
import { Project } from '@/types/project';

interface ProjectListProps {
  projects: Project[];
}

export default async function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        projects.map((project) => (
          <ProjectItem key={project._id} project={project}/>
        ))
      }
    </div>
  )
}

