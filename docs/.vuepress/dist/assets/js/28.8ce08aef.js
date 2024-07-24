(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{241:function(e,n,t){e.exports=t.p+"assets/img/luoxiaosheng.3e3f64f6.svg"},242:function(e,n,t){e.exports=t.p+"assets/img/luoxiaosheng_learning.c39ce245.svg"},243:function(e,n,t){e.exports=t.p+"assets/img/luoxiaosheng_wechat.8efd3324.svg"},326:function(e,n,t){"use strict";t.r(n);var a=t(14),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_0-1learning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-1learning"}},[e._v("#")]),e._v(" 0-1Learning")]),e._v(" "),n("p",[n("img",{attrs:{src:t(241),alt:"alt text",title:"公众号"}}),e._v(" "),n("img",{attrs:{src:t(242),alt:"alt text",title:"学习"}}),e._v(" "),n("img",{attrs:{src:t(243),alt:"alt text",title:"微信"}})]),e._v(" "),n("h2",{attrs:{id:"服务service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务service"}},[e._v("#")]),e._v(" 服务Service")]),e._v(" "),n("h3",{attrs:{id:"_3-1-服务是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-服务是什么"}},[e._v("#")]),e._v(" 3.1 服务是什么")]),e._v(" "),n("p",[e._v("服务（Service）是Android 中实现程序后台运行的解决方案，它非常适合用于去执行那些不需要和用户交互而且还要求长期运行的任务。\n服务的运行不依赖于任何用户界面，即使当程序被切换到后台，或者用户打开了另外一个应用程序，服务仍然能够保持正常运行。\n不过需要注意的是，服务并不是运行在一个独立的进程当中的，而是依赖于创建服务时所在的应用程序进程。当某个应用程序进程被杀掉时，所有依赖于该进程的服务也会停止运行。")]),e._v(" "),n("p",[e._v("另外，也不要被服务的后台概念所迷惑，实际上服务并不会自动开启线程，所有的代码都是默认运行在主线程当中的。\n也就是说，我们需要在服务的内部手动创建子线程，并在这里执行具体的任务，否则就有可能出现主线程被阻塞住的情况。")]),e._v(" "),n("h3",{attrs:{id:"_3-2-android多线程编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-android多线程编程"}},[e._v("#")]),e._v(" 3.2 android多线程编程")]),e._v(" "),n("h4",{attrs:{id:"线程的基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#线程的基本用法"}},[e._v("#")]),e._v(" 线程的基本用法")]),e._v(" "),n("p",[e._v("Android 多线程编程其实并不比Java 多线程编程特珠，基本都是使用相同的语法。\n继承Thread或者实现runnable接口都可以")]),e._v(" "),n("h4",{attrs:{id:"在子线程中更新ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在子线程中更新ui"}},[e._v("#")]),e._v(" 在子线程中更新UI")]),e._v(" "),n("p",[e._v("和许多其他的GUI 库一样，Android 的UI 也是线程不安全的。也就是说，如果想要更新应用程序里的UI 元素，则必须在主线程中进行，否则就会出现异常。\n例：直接使用Thread或者实现runnable更新会报错")]),e._v(" "),n("p",[e._v("但是有些时候，我们必须在子线程里去执行一些耗时任务，然后根据任务的执行结果来更新相应的UI 控件，\n对于这种情况，Android 提供了一套异步消息处理机制，完美地解决了在子线程中进行UI 操作的问题。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('1.使用handler更新UI\npublic class MainActivity extends Activity implements OnClickListener {\n    public static final int UPDATE_TEXT = 1;\n    private TextView text;\n    private Button changeText;\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        text = (TextView) findViewById(R.id.text);\n        changeText = (Button) findViewById(R.id.change_text);\n        changeText.setOnClickListener(this);\n    }\n    //定义handler\n    private Handler handler = new Handler() {\n        public void handleMessage(Message msg) {\n            switch (msg.what) {\n                case UPDATE_TEXT:\n                    // 在这里可以进行UI操作\n                    text.setText("Nice to meet you");\n                    break;\n                default:\n                    break;\n            }\n        }\n    };\n    ……    \n\n    @Override\n    public void onClick(View v) {\n        switch (v.getId()) {\n            case R.id.change_text:\n                new Thread(new Runnable() {\n                    @Override\n                    public void run() {\n                        //text.setText("Nice to meet you");   //不能直接更新UI\n                        Message message = new Message();\n                        message.what = UPDATE_TEXT;\n                        handler.sendMessage(message); // 将Message对象发送出去\n                    }\n                }).start();\n                break;\n            default:\n                break;\n        }\n    }\n}\n')])])]),n("h4",{attrs:{id:"解析异步消息处理机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解析异步消息处理机制"}},[e._v("#")]),e._v(" 解析异步消息处理机制")]),e._v(" "),n("p",[e._v("Android 中的异步消息处理主要由四个部分组成，Message、Handler、MessageQueue 和Looper。")]),e._v(" "),n("ol",[n("li",[e._v("Message\nMessage 是在线程之间传递的消息，它可以在内部携带少量的信息，用于在不同线程之间交换数据。\n上一小节中我们使用到了Message 的what 字段，除此之外还可以使\n用arg1 和arg2 字段来携带一些整型数据，使用obj 字段携带一个Object 对象。")]),e._v(" "),n("li",[e._v("Handler\nHandler 顾名思义也就是处理者的意思，它主要是用于发送和处理消息的。\n发送消息一般是使用Handler 的sendMessage()方法，而发出的消息经过一系列地辗转处理后，\n最终会传递到Handler 的handleMessage()方法中。")]),e._v(" "),n("li",[e._v("MessageQueue\nMessageQueue 是消息队列的意思，它主要用于存放所有通过Handler 发送的消息。\n这部分消息会一直存在于消息队列中，等待被处理。\n每个线程中只会有一个MessageQueue对象。")]),e._v(" "),n("li",[e._v("Looper\nLooper 是每个线程中的MessageQueue 的管家，调用Looper 的loop()方法后，就会\n进入到一个无限循环当中，然后每当发现MessageQueue 中存在一条消息，就会将它取\n出，并传递到Handler 的handleMessage()方法中。每个线程中也只会有一个Looper 对象。")])]),e._v(" "),n("h4",{attrs:{id:"使用asynctask"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用asynctask"}},[e._v("#")]),e._v(" 使用AsyncTask")]),e._v(" "),n("p",[e._v("首先来看一下AsyncTask 的基本用法，由于AsyncTask 是一个抽象类，所以如果我们想使用它，就必须要创建一个子类去继承它。\n在继承时我们可以为AsyncTask 类指定三个泛型参数，这三个参数的用途如下。")]),e._v(" "),n("ol",[n("li",[e._v("Params\n在执行AsyncTask 时需要传入的参数，可用于在后台任务中使用。")]),e._v(" "),n("li",[e._v("Progress\n后台任务执行时，如果需要在界面上显示当前的进度，则使用这里指定的泛型作为进度单位。")]),e._v(" "),n("li",[e._v("Result\n当任务执行完毕后，如果需要对结果进行返回，则使用这里指定的泛型作为返回值类型。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("因此，一个最简单的自定义AsyncTask 就可以写成如下方式：\nclass DownloadTask extends AsyncTask<Void, Integer, Boolean> {\n……\n}\n")])])]),n("p",[e._v("我们还需要去重写AsyncTask 中的几个方法才能完成对任务的定制。经常需要去重写的方法有以下四个。")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("onPreExecute()\n这个方法会在后台任务开始执行之前调用，用于进行一些界面上的初始化操作，比如显示一个进度条对话框等。")])]),e._v(" "),n("li",[n("p",[e._v("doInBackground(Params...)\n这个方法中的所有代码都会在子线程中运行，我们应该在这里去处理所有的耗时任务。\n任务一旦完成就可以通过return 语句来将任务的执行结果返回，如果AsyncTask 的\n第三个泛型参数指定的是Void，就可以不返回任务执行结果。\n注意，在这个方法中是不可以进行UI 操作的，如果需要更新UI 元素，比如说反馈当前任务的执行进度，可以调\n用publishProgress(Progress...)方法来完成。")])]),e._v(" "),n("li",[n("p",[e._v("onProgressUpdate(Progress...)\n当在后台任务中调用了publishProgress(Progress...)方法后，这个方法就会很快被调用，方法中携带的参数就是在后台任务中传递过来的。\n在这个方法中可以对UI 进行操作，利用参数中的数值就可以对界面元素进行相应地更新。")])]),e._v(" "),n("li",[n("p",[e._v("onPostExecute(Result)\n当后台任务执行完毕并通过return 语句进行返回时，这个方法就很快会被调用。\n返回的数据会作为参数传递到此方法中，可以利用返回的数据来进行一些UI 操作，比如说提醒任务执行的结果，以及关闭掉进度条对话框等。")])])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('class DownloadTask extends AsyncTask<Void, Integer, Boolean> {\n    @Override\n    protected void onPreExecute() {\n        progressDialog.show(); // 显示进度对话框\n    }\n\n    @Override\n    protected Boolean doInBackground(Void... params) {\n        try {\n            while (true) {\n                int downloadPercent = doDownload(); // 这是一个虚构的方法\n                publishProgress(downloadPercent);\n                if (downloadPercent >= 100) {\n                    break;\n                }\n            }\n        } catch (Exception e) {\n            return false;\n        }\n        return true;\n    }\n\n    @Override\n    protected void onProgressUpdate(Integer... values) {\n        // 在这里更新下载进度\n        progressDialog.setMessage("Downloaded " + values[0] + "%");\n    }\n\n    @Override\n    protected void onPostExecute(Boolean result) {\n        progressDialog.dismiss(); // 关闭进度对话框\n        // 在这里提示下载结果\n        if (result) {\n            Toast.makeText(context, "Download succeeded",\n            Toast.LENGTH_SHORT).show();\n        } else {\n            Toast.makeText(context, " Download failed",\n            Toast.LENGTH_SHORT).show();\n        }\n    }\n}\n')])])]),n("p",[e._v("简单来说，使用AsyncTask 的诀窍就是，\n在doInBackground()方法中去执行具体的耗时任务，\n在onProgressUpdate()方法中进行UI 操作，\n在onPostExecute()方法中执行一些任务的收尾工作。")]),e._v(" "),n("p",[e._v("如果想要启动这个任务，只需编写以下代码即可：\nnew DownloadTask().execute();")]),e._v(" "),n("h3",{attrs:{id:"详解asynctask"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#详解asynctask"}},[e._v("#")]),e._v(" 详解AsyncTask")]),e._v(" "),n("p",[e._v("首先从Android3.0开始，系统要求网络访问必须在子线程中进行，否则网络访问将会失败并抛出NetworkOnMainThreadException这个异常，这样做是为了避免主线程由于耗时操作所阻塞从而出现ANR现象。\nAsyncTask封装了线程池和Handler。\nAsyncTask有两个线程池：SerialExecutor（用于任务的排队，默认是串行的线程池）和THREAD_POOL_EXECUTOR（用于真正的执行任务）。")]),e._v(" "),n("p",[e._v("AsyncTask还有一个Handler，叫InternalHandler，用于将执行环境从线程池切换到主线程。AsyncTask内部就是通过InternalHandler来发送任务执行的进度以及执行结束等消息。")]),e._v(" "),n("p",[e._v("AsyncTask排队执行过程：系统先把参数Params封装为FutureTask对象，它相当于Runnable，接着FutureTask交给SerialExcutor的execute方法，它先把FutureTask插入到任务队列tasks中，如果这个时候没有正在活动的AsyncTask任务，那么就会执行下一个AsyncTask任务，同时当一个AsyncTask任务执行完毕之后，AsyncTask会继续执行其他任务直到所有任务都被执行为止。")]),e._v(" "),n("p",[e._v("关于线程池，AsyncTask对应的线程池ThreadPoolExecutor都是进程范围内共享的，都是static的，所以是AsyncTask控制着进程范围内所有的子类实例。\n由于这个限制的存在，当使用默认线程池时，如果线程数超过线程池的最大容量，线程池就会爆掉(3.0默认串行执行，不会出现这个问题)。\n针对这种情况。可以尝试自定义线程池，配合AsyncTask使用。")]),e._v(" "),n("h3",{attrs:{id:"服务的基本用法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务的基本用法"}},[e._v("#")]),e._v(" 服务的基本用法")]),e._v(" "),n("p",[e._v("定义一个Server\n项目内Server包 右键 --\x3e New --\x3e Service --\x3e Service 或者直接创建Class类，继承Service并重写IBinder方法")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyService extends Service{\n\n\t@Override\n\tpublic IBinder onBind(Intent intent) {\n\t\treturn null;\n\t}\n\t\n\t@Override\n\tpublic void onCreate() {\n\t\tsuper.onCreate();\n\t}\n\t\n\t@Override\n\tpublic int onStartCommand(Intent intent, int flags, int startId) {\n\t\treturn super.onStartCommand(intent, flags, startId);\n\t}\n\t\n\t@Override\n\tpublic void onDestroy() {\n\t\t// TODO Auto-generated method stub\n\t\tsuper.onDestroy();\n\t}\n}\n\n")])])]),n("p",[e._v("重写Service的 onCreate()、onStartCommand()和onDestory()方法。\n其中 onCreate() 方法在服务创建的时候调用、onStartCommand() 方法会在每次服务启动的时候调用、onDestory() 方法会在服务销毁的时候调用。\n其实onCreate()方法是在服务第一次创建的时候调用的，而onStartCommand()方法则在每次启动服务的时候都会调用")]),e._v(" "),n("p",[e._v("通常情况下，如果我们希望服务一旦启动就立刻去执行任务，就可以将逻辑卸载onStartCommand() 方法里。\n另外需要注意的是，每个服务都需要在Androidmanifest.xml 中进行注册才能生效：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<application\n\t....>\n\t...\n\t<service\n\t\tandroid:name=".MyService"\n\t\tandroid:enabled="true"\n\t\tandroid:exported="true">\n\t</service>\n</application>\n')])])]),n("h4",{attrs:{id:"启动和停止服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动和停止服务"}},[e._v("#")]),e._v(" 启动和停止服务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("启动服务：\nIntent startIntent = new Intent(this, MyService.class);\nstartService(startIntent); //启动服务\n\n停止服务：\nIntent stopIntent = new Intent(this, MyService.class);\nstopService(stopIntent); //停止服务\n")])])]),n("h4",{attrs:{id:"活动和服务进行通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#活动和服务进行通信"}},[e._v("#")]),e._v(" 活动和服务进行通信")]),e._v(" "),n("p",[e._v("实现这个功能的思路是创建一个专门的Binder 对象来对下载功能进行管理，修改MyService 中的代码，如下所示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class MyService extends Service {\n\n    private DownloadBinder mBinder = new DownloadBinder();\n    class DownloadBinder extends Binder {\n        public void startDownload() {\n            Log.d("MyService", "startDownload executed");\n        }\n        public int getProgress() {\n            Log.d("MyService", "getProgress executed");\n            return 0;\n        }\n    }\n    @Override\n    public IBinder onBind(Intent intent) {\n        return mBinder;\n    }\n    ……\n}\n')])])]),n("p",[e._v("这两个按钮分别是用于绑定服务和取消绑定服务的，那到底谁需要去和服务绑定呢？当然就是活动了。\n当一个活动和服务绑定了之后，就可以调用该服务里的Binder 提供的方法了。\n修改MainActivity 中的代码，如下所示：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MainActivity extends Activity implements OnClickListener {\n    private Button startService;\n    private Button stopService;\n    private Button bindService;\n    private Button unbindService;\n    private MyService.DownloadBinder downloadBinder;\n    \n    private ServiceConnection connection = new ServiceConnection() {\n        @Override\n        public void onServiceDisconnected(ComponentName name) {\n        }\n        @Override\n        public void onServiceConnected(ComponentName name, IBinder service) {\n            downloadBinder = (MyService.DownloadBinder) service;\n            downloadBinder.startDownload();\n            downloadBinder.getProgress();\n        }\n    };\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        super.onCreate(savedInstanceState);\n        setContentView(R.layout.activity_main);\n        ……\n        bindService = (Button) findViewById(R.id.bind_service);\n        unbindService = (Button) findViewById(R.id.unbind_service);\n        bindService.setOnClickListener(this);\n        unbindService.setOnClickListener(this);\n    }\n    @Override\n    public void onClick(View v) {\n        switch (v.getId()) {\n            ……\n            case R.id.bind_service:\n                Intent bindIntent = new Intent(this, MyService.class);\n                bindService(bindIntent, connection, BIND_AUTO_CREATE); // 绑定服务\n                break;\n            case R.id.unbind_service:\n                unbindService(connection); // 解绑服务\n                break;\n            default:\n                break;\n        }\n    }\n}\n\n")])])]),n("h3",{attrs:{id:"服务的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务的生命周期"}},[e._v("#")]),e._v(" 服务的生命周期")]),e._v(" "),n("p",[e._v("之前章节我们学习过了活动以及碎片的生命周期。类似地，服务也有自己的生命周期，\n前面我们使用到的onCreate()、onStartCommand()、onBind()和onDestroy()等方法都是在服务的生命周期内可能回调的方法。")]),e._v(" "),n("p",[e._v("一旦在项目的任何位置调用了Context 的startService()方法，相应的服务就会启动起来，并回调onStartCommand()方法。\n如果这个服务之前还没有创建过，onCreate()方法会先于onStartCommand()方法执行。\n服务启动了之后会一直保持运行状态，直到stopService()或stopSelf()方法被调用。\n注意虽然每调用一次startService()方法，onStartCommand()就会执行一次，但实际上每个服务都只会存在一个实例。\n所以不管你调用了多少次startService()方法，只需调用一次stopService()或stopSelf()方法，服务就会停止下来了。")]),e._v(" "),n("p",[e._v("另外，还可以调用Context 的bindService()来获取一个服务的持久连接，这时就会回调服务中的onBind()方法。\n类似地，如果这个服务之前还没有创建过，onCreate()方法会先于onBind()方法执行。\n之后，调用方可以获取到onBind()方法里返回的IBinder 对象的实例，这样就能自由地和服务进行通信了。只要调用方和服务之间的连接没有断开，服务就会一直保持运行状态。")]),e._v(" "),n("p",[e._v("当调用了startService()方法后，又去调用stopService()方法，这时服务中的onDestroy()\n方法就会执行，表示服务已经销毁了。类似地，当调用了bindService()方法后，又去调用\nunbindService()方法，onDestroy()方法也会执行，这两种情况都很好理解。\n但是需要注意，\n我们是完全有可能对一个服务既调用了startService()方法，又调用了bindService()方法的，\n这种情况下该如何才能让服务销毁掉呢？根据Android 系统的机制，一个服务只要被启动或\n者被绑定了之后，就会一直处于运行状态，必须要让以上两种条件同时不满足，服务才能被销毁。\n所以，这种情况下要同时调用stopService()和unbindService()方法，onDestroy()方法才会执行。\n这样你就已经把服务的生命周期完整地走了一遍。")]),e._v(" "),n("h3",{attrs:{id:"服务的更多技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务的更多技巧"}},[e._v("#")]),e._v(" 服务的更多技巧")]),e._v(" "),n("h4",{attrs:{id:"使用前台服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用前台服务"}},[e._v("#")]),e._v(" 使用前台服务")]),e._v(" "),n("p",[e._v("前台服务与普通服务的最大区别在于，它会一直有一个正在运行的图标在系统的状态栏中，下拉状态栏后可以看到更加详细的内容，非常类似于通知的效果。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class MyService extends Service{\n\tIntent intent = new Intent(this, MainActivity.class);\n\tPendingIntent pi = PendingIntent.getActivity(this, 0 , intent, 0);\n\n\tNotification notification  = new NotificationCompat.Builder(this)\n\t\t.setContentTitle(" this is content titile")\n\t\t.setContentText("this is content text")\n\t\t.setWhen(System.currentTimeMillis())\n\t\t.setSmallIcon(R.mipmap.ic_launcher);\n\t\t.setLargeIcon(BitmapFactory.decodeResource(getResource(),\n\t\t\tR.mipmap.ic_launcher))\n\t\t.setContentIntent(pi)\n\t\t.build();\n\tstartForeground(1,notification);\n}\n')])])]),n("p",[e._v("构造一个Notification对象后并没有使用NotificationManager 来讲通知显示出来，而是调用了startForeground()方法，该方法会将MyService变成一个前台服务，并在系统状态栏中显示出来。")]),e._v(" "),n("h4",{attrs:{id:"使用intentservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用intentservice"}},[e._v("#")]),e._v(" 使用IntentService")]),e._v(" "),n("p",[e._v("服务中的代码都默认运行在主线程中，如果直接在服务中执行耗时操作很容易出现ANR（Application not Responding）\n所以这个时候需要用到Android多线程编程技术，我们应该在服务的每个具体的方法里启动一个子线程，然后在这里去处理那些耗时的操作：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MyService extends Service{\n\t...\n\t@Override\n\tpublic int onStartCommand(Intent intent , int flags, int startId){\n\t\tnew Thread(new Runnable(){\n\t\t\tpublic void run(){\n\t\t\t\t//处理具体的逻辑\n\t\t\t}\n\t\t}).start();\n\t\treturn super.onStartCommand(intent, flags, startId);\n\t}\n}\n")])])]),n("p",[e._v("但是，这种服务一旦启动之后，就会一直处于运行状态，必须调用stopService()或者stopSelf()方法才能让服务停止下来，所以，如果想要实现让一个服务在执行完毕后自动停止的功能，就可以这样写：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("public class MySerivce extends Servcie{\n\t...\n\t@Override\n\tpublic int onStartCommand(Intent intent, int flats , int startId){\n\t\tnew Thread(new Runnable(){\n\t\t\tpublic void run(){\n\t\t\t\t//处理具体的逻辑\n\t\t\t\tstopSelf();\n\t\t\t}\n\t\t});\n\t}\n}\n")])])]),n("p",[e._v("虽说这样的写法并不复杂，但是总会有一些程序员忘记开启线程或者忘记调用stopSelf() 方法。为了简单创建一个异步、会自动停止的服务。Android专门提供了一个IntentService类")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class MyIntentService extends IntentService{\n\tpublic MyIntentService(){\n\t\tsuper("MyIntentService");  //调用父类的有参构造方法\n\t}\n\t@Override\n\tprotected void onHandleIntent(Intent intent){\t\n\t\t//打印当前的线程ID\n\t\tLog.e("mylog","Thread id is” + Thread.cuttentThread().getId();\n\t}\n\t@Override\n\tpublic void onDestory(){\n\t\tsuper.onDestory();\n\t\tLog.e("mylog","on Destory executed");\n\t}\n}\n')])])]),n("p",[e._v("首先这里提供一个无参的构造方法，并且必须在其内部调用父类的有参构造方法。然后要在子类中去实现onHandleIntent() 这个抽象方法，在这个方法中可以去处理一些逻辑，而且不用担心ANR，因为这个方法已经是在子线程中运行了。\nIntentService线程的调用：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Intent intent = new Intent(this, MyIntentService.class);\nstartServcie(intent);\n")])])]),n("p",[e._v("如此，线程就会自动启动并执行逻辑，执行完毕后自动关闭。这就是IntentService 的好处，能够自动开启和关闭；")]),e._v(" "),n("h3",{attrs:{id:"android中的定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android中的定时任务"}},[e._v("#")]),e._v(" android中的定时任务")]),e._v(" "),n("p",[e._v("Android 中的定时任务一般有两种实现方式，\n一种是使用Java API 里提供的Timer 类，\n一种是使用Android 的Alarm 机制。")]),e._v(" "),n("p",[e._v("但Timer有一个明显的短板，它并不太适用于那些需要长期在后台运行的定时任务。\n我们都知道了能让电池更加耐用，每种手机都会有自己的休眠策略，Android 手机就会在长时间不操作\n的情况下自动让CPU 进入到睡眠状态，这就有可能导致Timer 中的定时任务无法正常运行。\n而Alarm 机制则不存在这种情况，它具有唤醒CPU 的功能，即可以保证每次需要执行定时任务的时候CPU 都能正常工作。\n需要注意，这里唤醒CPU 和唤醒屏幕完全不是同一个概念，千万不要产生混淆。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("AlarmManager manager = (AlarmManager) getSystemService(Context.ALARM_SERVICE);\n接下来调用AlarmManager 的set()方法就可以设置一个定时任务了，\n比如说想要设定一个任务在10 秒钟后执行，就可以写成：\nlong triggerAtTime = SystemClock.elapsedRealtime() + 10 * 1000;\nmanager.set(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime, pendingIntent);\n")])])]),n("p",[e._v("第一个参数是一个整型参数，用于指定AlarmManager 的工作类型，有四种值可选，分别是ELAPSED_REALTIME、ELAPSED_REALTIME_WAKEUP、RTC 和RTC_WAKEUP。\nELAPSED_REALTIME 表示让定时任务的触发时间从系统开机开始算起，但不会唤醒CPU。\nELAPSED_REALTIME_WAKEUP 同样表示让定时任务的触发时间从系统开机开始算起，但会唤醒CPU。\nRTC 表示让定时任务的触发时间从1970 年1月1 日0 点开始算起，但不会唤醒CPU。\nRTC_WAKEUP 同样表示让定时任务的触发时间从1970 年1 月1 日0 点开始算起，但会唤醒CPU。\n使用SystemClock.elapsedRealtime()方法可以获取到系统开机至今所经历时间的毫秒数，\n使用System.currentTimeMillis()方法可以获取到1970 年1 月1 日0 点至今所经历时间的毫秒数。")]),e._v(" "),n("p",[e._v("第二个参数，这个参数就好理解多了，就是定时任务触发的时间，以毫秒为单位。\n如果第一个参数使用的是ELAPSED_REALTIME 或ELAPSED_REALTIME_WAKEUP，则这里传入开机至今的时间再加上延迟执行的时间。\n如果第一个参数使用的是RTC 或RTC_WAKEUP，则这里传入1970 年1 月1 日0 点至今的时间再加上延迟执行的时间。")]),e._v(" "),n("p",[e._v("第三个参数是一个PendingIntent，对于它你应该已经不会陌生了吧。这里我们一般会调\n用getBroadcast()方法来获取一个能够执行广播的PendingIntent。这样当定时任务被触发的时\n候，广播接收器的onReceive()方法就可以得到执行")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@Override\npublic int onStartCommand(Intent intent, int flags, int startId) {\n    new Thread(new Runnable() {\n        @Override\n        public void run() {\n            Log.d("LongRunningService", "executed at " + new Date().toString());\n        }\n    }).start();\n    AlarmManager manager = (AlarmManager) getSystemService(ALARM_SERVICE);\n    int anHour = 60 * 60 * 1000; // 这是一小时的毫秒数\n    long triggerAtTime = SystemClock.elapsedRealtime() + anHour;\n\n    Intent i = new Intent(this, AlarmReceiver.class);\n    PendingIntent pi = PendingIntent.getBroadcast(this, 0, i, 0);\n    manager.set(AlarmManager.ELAPSED_REALTIME_WAKEUP, triggerAtTime, pi);\n    return super.onStartCommand(intent, flags, startId);\n}\n')])])]),n("p",[e._v("当然，如果你要求Alarm 任务的执行时间必须准备无误，Android 仍然提供了解决方案。\n使用AlarmManager 的setExact()方法来替代set()方法，就可以保证任务准时执行了。")]),e._v(" "),n("h3",{attrs:{id:"handler实现定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handler实现定时任务"}},[e._v("#")]),e._v(" handler实现定时任务")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1. 定义一个Handler类\n\nHandler handler=new Handler();  \nRunnable runnable=new Runnable() {  \n    @Override  \n    public void run() {  \n        // TODO Auto-generated method stub  \n        //要做的事情  \n        handler.postDelayed(this, 2000);  \n    }  \n};  \n2. 启动计时器\nhandler.postDelayed(runnable, 2000);//每两秒执行一次runnable.  \n3. 停止计时器\nhandler.removeCallbacks(runnable);   \n")])])]),n("h3",{attrs:{id:"timer定时任务-不能保证准备执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timer定时任务-不能保证准备执行"}},[e._v("#")]),e._v(" timer定时任务（不能保证准备执行）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("timer = new Timer();\n        //游戏倒计时\n        timer.schedule(new TimerTask() {\n            @Override\n            public void run() {\n\n            }\n        }, 1, 1000);\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);