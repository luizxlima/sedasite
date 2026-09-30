import type { Metadata } from "next";
import AdmissionsLayout from "@/app/components/AdmissionsLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fees | SEDA College",
  description: "Current course fees, accommodation prices, and mandatory fees for SEDA College.",
};

export default function FeesPage() {
  return (
    <AdmissionsLayout title="Fees">
      <div className="bg-blue-50 border-l-4 border-seda-primary p-4 mb-8 rounded-r-lg">
        <p className="text-sm m-0 text-gray-700">
          All prices are in euro (EUR) and are valid for bookings made until <strong>31 December 2026</strong>. Prices are subject to change.
        </p>
      </div>

      <h2>Course fees – Dublin</h2>
      
      <h3>Short Term Face-to-Face (price per week)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">1 to 4 weeks</th>
              <th className="p-3 border border-seda-teal">4 to 8 weeks</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">8 to 12 weeks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H AM*</td>
              <td className="p-3 border border-gray-200">€158</td>
              <td className="p-3 border border-gray-200">€145</td>
              <td className="p-3 border border-gray-200">€139</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H PM*</td>
              <td className="p-3 border border-gray-200">€144</td>
              <td className="p-3 border border-gray-200">€132</td>
              <td className="p-3 border border-gray-200">€126</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Academic Year – 25 + 8</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">Morning</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Afternoon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H*</td>
              <td className="p-3 border border-gray-200">€3,300</td>
              <td className="p-3 border border-gray-200">€3,000</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">Global English</td>
              <td className="p-3 border border-gray-200">€3,400</td>
              <td className="p-3 border border-gray-200">€3,100</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">IELTS Preparation</td>
              <td className="p-3 border border-gray-200">€3,400</td>
              <td className="p-3 border border-gray-200">€3,100</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Academic Year – 25 + 8 (Renew price)</h3>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">Morning</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Afternoon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H*</td>
              <td className="p-3 border border-gray-200">€1,630</td>
              <td className="p-3 border border-gray-200">€1,330</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">Global English</td>
              <td className="p-3 border border-gray-200">€1,730</td>
              <td className="p-3 border border-gray-200">€1,430</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">IELTS Preparation</td>
              <td className="p-3 border border-gray-200">€1,730</td>
              <td className="p-3 border border-gray-200">€1,430</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-8" />

      <h2>Course fees – Cork</h2>
      
      <h3>Short Term Face-to-Face (price per week)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">1 to 4 weeks</th>
              <th className="p-3 border border-seda-teal">4 to 8 weeks</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">8 to 12 weeks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H AM*</td>
              <td className="p-3 border border-gray-200">€144</td>
              <td className="p-3 border border-gray-200">€132</td>
              <td className="p-3 border border-gray-200">€126</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H PM*</td>
              <td className="p-3 border border-gray-200">€132</td>
              <td className="p-3 border border-gray-200">€121</td>
              <td className="p-3 border border-gray-200">€116</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Academic Year – 25 + 8</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">Morning</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Afternoon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H*</td>
              <td className="p-3 border border-gray-200">€3,000</td>
              <td className="p-3 border border-gray-200">€2,750</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">Global English</td>
              <td className="p-3 border border-gray-200">€3,100</td>
              <td className="p-3 border border-gray-200">€2,850</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">IELTS Preparation</td>
              <td className="p-3 border border-gray-200">€3,100</td>
              <td className="p-3 border border-gray-200">€2,850</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Academic Year – 25 + 8 (Renew price)</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Course</th>
              <th className="p-3 border border-seda-teal">Morning</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Afternoon</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">GE 15H*</td>
              <td className="p-3 border border-gray-200">€1,430</td>
              <td className="p-3 border border-gray-200">€1,130</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">Global English</td>
              <td className="p-3 border border-gray-200">€1,530</td>
              <td className="p-3 border border-gray-200">€1,230</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200 font-semibold text-gray-800">IELTS Preparation</td>
              <td className="p-3 border border-gray-200">€1,530</td>
              <td className="p-3 border border-gray-200">€1,230</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-600 italic mb-10">
        * GE 15H = General English, 15 hours of tuition per week. Academic Year 25 + 8 = 25 weeks of tuition + 8 weeks of holidays (33 weeks in total). Renew price = price for renewing your course at the end of the current one.
      </div>

      <hr className="my-8" />

      <h2>Mandatory fees (charged once per course, in addition to the course fee)</h2>
      <ul className="mb-6">
        <li><strong>Registration Fee:</strong> €150</li>
        <li><strong>Medical Insurance:</strong> €150</li>
        <li><strong>Learner Protection:</strong> €150</li>
        <li><strong>Trinity Exam (deposit):</strong> €70</li>
      </ul>
      <p className="text-sm text-gray-700">
        <strong>Learner Protection:</strong> mandatory learner protection insurance, as required by Irish regulations for international education providers. It protects the fees you have paid if SEDA College is unable to complete your course.<br/><br/>
        <strong>Medical Insurance:</strong> private medical insurance required for your stay in Ireland.<br/><br/>
        <strong>Trinity Exam:</strong> deposit for the end-of-course Trinity College London exam.
      </p>

      <hr className="my-8" />

      <h2>Accommodation (price per week)</h2>
      
      <h3>Dublin</h3>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Leevin Stay</th>
              <th className="p-3 border border-seda-teal">Price</th>
              <th className="p-3 border border-seda-teal">Leevin Hostel</th>
              <th className="p-3 border border-seda-teal">Price</th>
              <th className="p-3 border border-seda-teal">Host Family</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Single</td>
              <td className="p-3 border border-gray-200">€344 (extra day €62)</td>
              <td className="p-3 border border-gray-200">Shared 14</td>
              <td className="p-3 border border-gray-200">€212</td>
              <td className="p-3 border border-gray-200">Single Full Board</td>
              <td className="p-3 border border-gray-200">€408</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Twin/Double</td>
              <td className="p-3 border border-gray-200">€297 (extra day €53)</td>
              <td className="p-3 border border-gray-200">Shared 12</td>
              <td className="p-3 border border-gray-200">€219</td>
              <td className="p-3 border border-gray-200">Single Half Board</td>
              <td className="p-3 border border-gray-200">€380</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200">Triple</td>
              <td className="p-3 border border-gray-200">€280 (extra day €51)</td>
              <td className="p-3 border border-gray-200">Shared 9</td>
              <td className="p-3 border border-gray-200">€233</td>
              <td className="p-3 border border-gray-200">Single Breakfast Only</td>
              <td className="p-3 border border-gray-200">€352</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200">Quadruple</td>
              <td className="p-3 border border-gray-200">€259 (extra day €46)</td>
              <td className="p-3 border border-gray-200">Shared 8</td>
              <td className="p-3 border border-gray-200">€240</td>
              <td className="p-3 border border-gray-200">Shared Full Board</td>
              <td className="p-3 border border-gray-200">€380</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 6</td>
              <td className="p-3 border border-gray-200">€254</td>
              <td className="p-3 border border-gray-200">Shared Half Board</td>
              <td className="p-3 border border-gray-200">€352</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 6 Ensuite</td>
              <td className="p-3 border border-gray-200">€261</td>
              <td className="p-3 border border-gray-200">Shared Breakfast Only</td>
              <td className="p-3 border border-gray-200">€324</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 4</td>
              <td className="p-3 border border-gray-200">€275</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 4 Ensuite</td>
              <td className="p-3 border border-gray-200">€289</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 3</td>
              <td className="p-3 border border-gray-200">€296</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 3 Ensuite</td>
              <td className="p-3 border border-gray-200">€303</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 2</td>
              <td className="p-3 border border-gray-200">€324</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200">Shared 2 Ensuite</td>
              <td className="p-3 border border-gray-200">€338</td>
              <td className="p-3 border border-gray-200"></td>
              <td className="p-3 border border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Cork</h3>
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border-collapse min-w-max">
          <thead>
            <tr className="bg-seda-teal text-white">
              <th className="p-3 border border-seda-teal rounded-tl-lg">Leevin Stay</th>
              <th className="p-3 border border-seda-teal rounded-tr-lg">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Single</td>
              <td className="p-3 border border-gray-200">€274 (extra day €47)</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Twin</td>
              <td className="p-3 border border-gray-200">€223 (extra day €36)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Twin Ensuite</td>
              <td className="p-3 border border-gray-200">€246 (extra day €39)</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Triple</td>
              <td className="p-3 border border-gray-200">€210 (extra day €31)</td>
            </tr>
            <tr className="bg-gray-50 hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Triple Ensuite</td>
              <td className="p-3 border border-gray-200">€223 (extra day €33)</td>
            </tr>
            <tr className="bg-white hover:bg-gray-100">
              <td className="p-3 border border-gray-200">Quadruple</td>
              <td className="p-3 border border-gray-200">€195 (extra day €29)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2>Optional services</h2>
          <ul>
            <li><strong>Airport Pick-Up (Dublin):</strong> €70</li>
            <li><strong>English Book:</strong> €50</li>
          </ul>
        </div>
        <div>
          <h2>External exam fees (optional)</h2>
          <ul>
            <li><strong>IELTS:</strong> €215</li>
            <li><strong>FCE:</strong> €180</li>
            <li><strong>CAE:</strong> €190</li>
            <li><strong>PET:</strong> €140</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-6 mt-12 rounded-lg text-sm text-gray-700">
        <p className="m-0">
          All prices in euro (EUR). Prices valid for bookings made until 31 December 2026 and subject to change. Course fees do not include the mandatory fees listed above. Accommodation prices are per week and subject to availability. All bookings are subject to our <Link href="/admissions/terms-and-conditions" className="font-bold underline">Terms &amp; Conditions</Link> and <Link href="/admissions/refund-policy" className="font-bold underline">Refund Policy</Link>.
        </p>
      </div>

    </AdmissionsLayout>
  );
}
