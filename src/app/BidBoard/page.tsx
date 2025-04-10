import {Report} from "../../../interface"
import ReportCard from "../../component/report";
import reportCard from "../../component/report"

const mockReports: Report[] = [
    {
      name: "Intania Running",
      who: "Pheem",
      teller: "Boom",
      when: "2025-01-01",
      description: "ข้าพเจ้าเห็นกับตาว่าเขาวิ่งจบแล้ว แต่ก็ยังไม่มาปรากฏตัว ณ ที่นัดหมาย",
      jury: 4,
    },
    {
      name: "BoardGame แบบใด",
      who: "TJ",
      teller: "INat",
      when: "2025-04-09",
      description: "ข้าพเจ้านัดเล่นบอร์ดเกมกับ TJ แล้ว แต่เขาก็ไม่ปรากฏตัวตามสัญญา",
      jury: 1,
    },
    {
      name: "Inat",
      who: "INat",
      teller: "Kwan",
      when: "2025-04-10",
      description: "ข้าพเจ้าไม่มีเหตุผลแน่ชัด แต่อยากแจ้งเพื่อให้ตรวจสอบ",
      jury: 0,
    },
  ];
  

export default function BidBoardPage(){
    return (
        <div>
            <h1>Bid Board Reports</h1>
            <ul>
                {mockReports.map((report, index) => (
                    <ReportCard key={index} report={report} />
                ))}
            </ul>
        </div>
    );
};

