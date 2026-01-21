import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Container from '../shared/layout/Container';
import Section from '../shared/layout/Section';
import { problemSolutionData } from '../../data/features';

const ProblemSolution = () => {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Problem Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Running a Small Business is Hard
              </h2>
              <p className="text-lg text-gray-600">
                Every day brings new challenges that cost you time and money.
              </p>
            </div>
            <div className="space-y-4">
              {problemSolutionData.problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100"
                >
                  <XCircleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{problem.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="text-red-800 font-medium text-center">
                😰 Sound familiar? There's a better way.
              </p>
            </div>
          </div>

          {/* Solution Side */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Invoicer Makes It Simple
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to run your business smoothly, right from your phone.
              </p>
            </div>
            <div className="space-y-4">
              {problemSolutionData.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg border border-green-100"
                >
                  <CheckCircleIcon className="h-6 w-6 text-[#9FE870] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 font-medium">{solution.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#9FE870]/20 rounded-lg border border-[#9FE870]">
              <p className="text-[#163300] font-medium text-center">
                ✨ Join 10,000+ businesses making it easier
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProblemSolution;
