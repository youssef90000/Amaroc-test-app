
import './App.css';

function App() {
  return (
    <div className="crud">
    <div className="head">
      <p>SYSTEME DE GESTION DE PRODUIT</p>
      <h2>نظام إدارة المنتج</h2>
    </div>
    <div className="container">
      <div className="label">
        <label> اسم المنتج</label>
        <label> كمية المنتج</label>
        <label> التاريخ</label>
        <label> مرجع المنتج</label>
        <label id="categ"> صنف المنتج</label>
      </div>
      <div className="inputs">
        <input placeholder="title" type="text" id="title" />
        <input placeholder="amount" type="number" id="amount" />
        <input
          placeholder="jj/mm/aaaa"
          type="text"
          id="date"
          onblur="validateDate(this)"
        />
        <input placeholder="REF" type="text" id="REF" />
        <input placeholder="category" type="text" id="category" />
      </div>
      <div className="labels">
        <label>ثمن المنتج</label>
        <label> (20%)القيمة المضافة</label>
        <label>الاشهار</label>
        <label>التخفيض</label>
        <label id="tot">المجموع</label>
      </div>
      <div className="price">
        <input
          onkeyup="getTotal()"
          placeholder="price"
          type="number"
          id="price"
        />
        <input
          onkeyup="getTotal()"
          placeholder="taxes"
          type="number"
          id="taxes"
        />
        <input onkeyup="getTotal()" placeholder="ads" type="number" id="ads" />
        <input
          onkeyup="getTotal()"
          placeholder="discount"
          type="number"
          id="discount"
        />
        <small id="total" />
      </div>
      <div>
        <label id="lblQte"> تكرار بيانات منتج عند الحاجة</label>
      </div>
      <div className="count">
        <input placeholder="count" type="number" id="count" />
        <button id="submit">CREATE</button>
      </div>
      <br />
    </div>
    <div className="outputs">
      <div className="label">
        <label>البحث بالاسم</label>
        <label> البحث عن المنتج</label>
        <label id="cat">البحث بالصنف</label>
      </div>
      <div className="btnSearch">
        <button onclick="getSearchMode(this.id)" id="searchTitle">
          Search By Title
        </button>
        <input
          onkeyup="searchData(this.value)"
          type="text"
          id="search"
          placeholder="Search"
        />
        <button onclick="getSearchMode(this.id)" id="searchCategory">
          Search By Category
        </button>
      </div>
      <div>
        <label id="searchDate">البحث بالشهر</label>
      </div>
      <div>
        <select id="monthFilter">
          <option value={0}>Mois</option>
          <option value={1}>Janvier</option>
          <option value={2}>Février</option>
          <option value={3}>Mars</option>
          <option value={4}>Avril</option>
          <option value={5}>Mai</option>
          <option value={6}>Juin</option>
          <option value={7}>Juillet</option>
          <option value={8}>Août</option>
          <option value={9}>Septembre</option>
          <option value={10}>Octobre</option>
          <option value={11}>Novembre</option>
          <option value={12}>Décembre</option>
        </select>
      </div>
      <br />
    </div>
    <div className="totals">
      <div className="totals-label">
        <label id="t-pro">مجموع المنتجات </label>
        <label id="t-price">مجموع ثمن المنتجات</label>
        <label id="suppr">افراغ البيانات</label>
      </div>
      <div className="totals-2">
        <div id="totalAmount">Total des quantités : 0</div>
        <div id="totalPrice"> Total des Achats : 0</div>
        <div id="deleteAll"> </div>
      </div>
    </div>
    <table id="tableau">
      <tbody>
        <tr>
          <th>id </th>
          <th>REFERENCE</th>
          <th>title</th>
          <th>date</th>
          <th>amount</th>
          <th>price</th>
          <th>taxes</th>
          <th>ads</th>
          <th>discount</th>
          <th>T-Price</th>
          <th>category</th>
          <th>update</th>
          <th>delete</th>
        </tr>
        {/*les données suivantes pour une simulation en attente les vrais données avec javascript*/}
      </tbody>
      <tbody id="tbody" />
    </table>
  </div>
  
    
  );
}

export default App;
