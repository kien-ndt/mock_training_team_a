/**
 * là giao diện toàn app, chứa sidebar, content, header, footer
 * props: children (nội dung của content)
 * mục đích chỉ chia route tới registration và dashboard, mà cần link giữa label timeline active và label trên sidebar
 * vì vậy cần state lưu lại trạng thái sidebar, truyền trạng thái này vào content và có hàm callback để set lại nếu click trên timeline ở sidebar hoặc các mục con
 * state: trạng thái hiện tại của sidebar(đang chọn mục nào...)
 * truyền trạng thái sidebar, callback qua useContext
 */
export {}