export default (source,callback) => {
    const t=typeof source==='function'?source():source;
    const f=t instanceof File ? t :t.files[0];
    const b =(h,d,e=false)=> ({
        header: h,
        body: d,
        error:e,
        file:f,
        all: function () {
            return this.header + this.body
        }
    });
    const reader = new FileReader();
    reader.onload=()=> {
        const rr = reader.result, index = rr.indexOf(',');
        if (index===-1) callback('',rr);
        else callback(b(rr.slice(0, index + 1),rr.slice(index + 1)));
    }
    reader.onerror=()=>callback('','',true)
    reader.readAsDataURL(f);
};