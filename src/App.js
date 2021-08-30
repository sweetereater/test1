import './App.css';
import PageContainer from './Component/PageContainer/PageContainer';

const stateFromServer = [
  {
    "header": "Заголовок 1",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3", "элемент списка 4", "элемент списка 5"],
    // "text": "какой-то текст 1 текст какой-то 1 какой-то",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eum mollitia hic modi. Cupiditate natus ut ipsa cumque? Ducimus eos, tempora amet dolorem quibusdam praesentium voluptates itaque dignissimos placeat recusandae unde cupiditate deleniti fugit accusantium aspernatur laudantium voluptatum reiciendis aperiam corporis illum similique officia? Odit sapiente rerum sed assumenda debitis",
  },
  {
    "header": "Заголовок 2",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3", "элемент списка 1", "элемент списка 2", "элемент списка 3", "элемент списка 1", "элемент списка 2", "элемент списка 3", "элемент списка 1", "элемент списка 2", "элемент списка 3"],
    // "text": "какой-то текст 2 текст какой-то текст 2",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam soluta voluptatum non officia voluptas odit sequi et magni, ad, error dolorem velit nemo explicabo cum. Iste odit id quia quasi labore laboriosam qui totam?",
  },
  {
    "header": "Заголовок 3",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3", "элемент списка 4"],
    "text": "какой-то текст 3 текст какой-то 3 какой-то",
    // "text": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et enim pariatur corporis deserunt aut corrupti. Natus sed tenetur autem laboriosam beatae quia pariatur possimus, deleniti minima aliquam, nesciunt, rem et voluptates odit voluptas mollitia debitis dolore quam aut recusandae nisi culpa esse. Quod at reprehenderit harum numquam repellendus inventore magnam nulla cumque nihil magni explicabo, aliquam nisi, dolorem pariatur asperiores, a praesentium! Odio non facere amet deserunt facilis, culpa laborum cum blanditiis ut maxime, ullam error, dolorum nihil placeat officiis temporibus ipsum itaque! Voluptate, aperiam recusandae dolor doloremque error distinctio hic molestiae voluptatum, tempora alias ut dolore aliquam nobis corporis."
  },
  {
    "header": "Заголовок 4",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3",],
    "text": "какой-то текст 4 текст какой-то текст 4 какой-то текст 4 текст какой-то текст 4"
    // "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam soluta voluptatum non officia voluptas odit sequi et magni, ad, error dolorem velit nemo explicabo cum. Iste odit id quia quasi labore laboriosam qui totam?",
  },
  {
    "header": "Заголовок 5",
    "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3",],
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam soluta voluptatum non officia voluptas odit sequi et magni, ad, error dolorem velit nemo explicabo cum. Iste odit id quia quasi labore laboriosam qui totam?",
  },
]


function App() {
  return (
    <div className="App">
      <PageContainer items={stateFromServer} />
    </div>
  );
}

export default App;
